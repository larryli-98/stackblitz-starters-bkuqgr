import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  BookShelfState,
  CurrentCheckoutReader,
  NewspaperShelfState,
  MagazineShelfState,
} from './reducers';

export const selectBookShelf = createSelector(
  createFeatureSelector<BookShelfState>('bookshelf'),
  (state) => state.books
);
export const selectNewspaperRack = createSelector(
  createFeatureSelector<NewspaperShelfState>('newspaper-shelf'),
  (state) => state.newspapers
);
export const selectMagazineRack = createSelector(
  createFeatureSelector<MagazineShelfState>('magazine-shelf'),
  (state) => state.magazines
);
export const selectMyReadings = (readerId: string) =>
  createSelector(
    selectBookShelf,
    selectNewspaperRack,
    selectMagazineRack,
    (books, newspapers, magazines) => {
      return [...books, ...newspapers, ...magazines].filter(
        (readings) => !!readings.returnDate && readings.readerId === readerId
      );
    }
  );
export const selectCheckoutReader = createSelector(
  createFeatureSelector<CurrentCheckoutReader>('checkout-reader'),
  (state) => state?.readerId
);
export const selectIsCheckingOut = (checkingoutReaderId: string) =>
  createSelector(selectCheckoutReader, (readerId) => {
    let same =
      !!readerId && !!checkingoutReaderId && readerId === checkingoutReaderId;
    return same;
  });
