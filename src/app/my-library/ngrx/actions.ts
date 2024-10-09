import {
  createActionGroup,
  createAction,
  emptyProps,
  props,
} from '@ngrx/store';
import { Book, Borrowable, Newspaper, Magazine } from '../models';

export const BorrowActions = createActionGroup({
  source: 'Borrow Actions',
  events: {
    borrow: props<{ item: Book | Newspaper | Magazine }>(),
    'borrow book': props<{ book: Book; readerId: string }>(),
    'borrow newspaper': props<{ newspaper: Newspaper; readerId: string }>(),
    'borrow magazine': props<{ magazine: Magazine; readerId: string }>(),
    'borrow empty': emptyProps(),
    reserve: props<{ item: Book | Newspaper | Magazine }>(),
    'reserve book': props<{ book: Book }>(),
    'reserve newspaper': props<{ newspaper: Newspaper }>(),
    'reserve magazine': props<{ magazine: Magazine }>(),
    returning: props<{ item: Borrowable }>(),
    'returning book': props<{ book: Book }>(),
    'returning newspaper': props<{ newspaper: Newspaper }>(),
    'returning magazine': props<{ magazine: Magazine }>(),
    update: emptyProps(),
  },
});

export const checkout = createAction(
  '[Checkout] checkout',
  props<{ readerId?: string | undefined }>()
);
