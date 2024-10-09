import * as fromRouter from '@ngrx/router-store';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import { Borrowable, Book, Newspaper, Magazine } from '../models';
import * as data from '../mocks/data';
import { BorrowActions, checkout } from './actions';

const borrowRules: { type: string; expire: number }[] = [
  { type: 'book', expire: 14 }, //days
  { type: 'newspaper', expire: 0.03 }, //hour
  { type: 'magazine', expire: 1 }, //hour
];
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action): fromRouter.RouterReducerState => {
    //console.log('state', state ? state : 'undefined state');
    //console.log('action', action ? action : 'undefined action');
    return reducer(state, action);
  };
}

export const metaReducers: ActionReducer<any> = debug;

export interface BookShelfState {
  books: Book[];
}
export const bookShelfReducer = createReducer(
  <BookShelfState>{ books: data.mockBooks() },
  on(
    BorrowActions.borrowBook,
    (state, action): BookShelfState => ({
      ...state,
      books: state.books.map((book) =>
        action.book.id === book.id
          ? (stamp(action.book, action.readerId) as Book)
          : book
      ),
    })
  ),
  on(
    BorrowActions.returningBook,
    (state, action): BookShelfState => ({
      ...state,
      books: state.books.map((book) =>
        action.book.id === book.id ? (unstamp(action.book, true) as Book) : book
      ),
    })
  ),
  on(
    BorrowActions.update,
    (state, action): BookShelfState => ({
      ...state,
      books: state.books.map(
        (book) =>
          unstamp(
            book,
            !!book.returnDate &&
              book.returnDate.getTime() < new Date().getTime()
          ) as Book
      ),
    })
  )
);

export interface NewspaperShelfState {
  newspapers: Newspaper[];
}
export const newspaperShelfReducer = createReducer(
  <NewspaperShelfState>{ newspapers: data.mockNewspapers() },
  on(
    BorrowActions.borrowNewspaper,
    (state, action): NewspaperShelfState => ({
      ...state,
      newspapers: state.newspapers.map((newspaper) =>
        action.newspaper.id === newspaper.id
          ? (stamp(action.newspaper, action.readerId) as Newspaper)
          : newspaper
      ),
    })
  ),
  on(
    BorrowActions.returningNewspaper,
    (state, action): NewspaperShelfState => ({
      ...state,
      newspapers: state.newspapers.map((newspaper) =>
        action.newspaper.id === newspaper.id
          ? (unstamp(action.newspaper, true) as Newspaper)
          : newspaper
      ),
    })
  ),
  on(
    BorrowActions.update,
    (state, action): NewspaperShelfState => ({
      ...state,
      newspapers: state.newspapers.map(
        (newspaper) =>
          unstamp(
            newspaper,
            !!newspaper.returnDate &&
              newspaper.returnDate.getTime() < new Date().getTime()
          ) as Newspaper
      ),
    })
  )
);

export interface MagazineShelfState {
  magazines: Magazine[];
}
export const magazineShelfStateReducer = createReducer(
  <MagazineShelfState>{ magazines: data.mockMagazines() },
  on(
    BorrowActions.borrowMagazine,
    (state, action): MagazineShelfState => ({
      ...state,
      magazines: state.magazines.map((magazine) =>
        action.magazine.id === magazine.id
          ? (stamp(action.magazine, action.readerId) as Magazine)
          : magazine
      ),
    })
  ),
  on(
    BorrowActions.returningMagazine,
    (state, action): MagazineShelfState => ({
      ...state,
      magazines: state.magazines.map((magazine) =>
        action.magazine.id === magazine.id
          ? (unstamp(action.magazine, true) as Magazine)
          : magazine
      ),
    })
  ),
  on(
    BorrowActions.update,
    (state, action): MagazineShelfState => ({
      ...state,
      magazines: state.magazines.map(
        (magazine) =>
          unstamp(
            magazine,
            !!magazine.returnDate &&
              magazine.returnDate.getTime() < new Date().getTime()
          ) as Magazine
      ),
    })
  )
);

export interface CurrentCheckoutReader {
  readerId?: string;
}
export const currentCheckoutReaderReducer = createReducer(
  <CurrentCheckoutReader>{ readerId: undefined },
  on(
    checkout,
    (state, action): CurrentCheckoutReader => ({
      ...state,
      readerId: action.readerId,
    })
  )
);

function stamp(item: Borrowable, readerId: string): Borrowable {
  let _item: Borrowable = Object.assign({}, item);
  _item.readerId = readerId;
  let _returnDate = new Date();
  if (item.readingType == 'book') {
    const daysToAdd: number = _borrowPeriod('book');
    _returnDate.setDate(_returnDate.getDate() + daysToAdd);
  } else if (item.readingType == 'newspaper') {
    const hoursToAdd: number = _borrowPeriod('newspaper') * 60 * 60 * 1000;
    _returnDate.setTime(_returnDate.getTime() + hoursToAdd);
  } else if (item.readingType == 'magazine') {
    const hoursToAdd: number = _borrowPeriod('magazine') * 60 * 60 * 1000;
    _returnDate.setTime(_returnDate.getTime() + hoursToAdd);
  }
  _item.returnDate = _returnDate;
  return _item;
}

function _borrowPeriod(type: string): number {
  const rule = borrowRules.find((b) => b.type === type);
  return rule ? rule.expire : 0;
}

function unstamp(item: Borrowable, callback: boolean): Borrowable {
  if (callback) {
    let _item: Borrowable = Object.assign({}, item);
    _item.returnDate = undefined;
    _item.readerId = undefined;
    return _item;
  } else {
    return item;
  }
}
