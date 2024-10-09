import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/operators';
import { Store } from '@ngrx/store';
import { map, timer } from 'rxjs';
import { BorrowActions } from './actions';
import { selectCheckoutReader } from './selectors';
import { Book, Newspaper, Magazine } from '../../my-library/models';

export const borrowEffects = createEffect(
  (action$ = inject(Actions), store$ = inject(Store)) => {
    return action$.pipe(
      ofType(BorrowActions.borrow),
      concatLatestFrom(() => store$.select(selectCheckoutReader)),
      map(([a, _readerId]) => {
        let readingType = a.item.readingType;
        if (readingType === 'book' && !!_readerId) {
          return BorrowActions.borrowBook({
            book: a.item as Book,
            readerId: _readerId,
          });
        } else if (readingType === 'newspaper' && !!_readerId) {
          return BorrowActions.borrowNewspaper({
            newspaper: a.item as Newspaper,
            readerId: _readerId,
          });
        } else if (readingType === 'magazine' && !!_readerId) {
          return BorrowActions.borrowMagazine({
            magazine: a.item as Magazine,
            readerId: _readerId,
          });
        } else {
          return BorrowActions.borrowEmpty;
        }
      })
    );
  },
  { functional: true }
);

export const returningEffect$ = createEffect(
  (action$ = inject(Actions)) => {
    return action$.pipe(
      ofType(BorrowActions.returning),
      map((a) => {
        if (a.item.readingType === 'book') {
          return BorrowActions.returningBook({ book: a.item as Book });
        } else if (a.item.readingType === 'newspaper') {
          return BorrowActions.returningNewspaper({
            newspaper: a.item as Newspaper,
          });
        } else if (a.item.readingType === 'magazine') {
          return BorrowActions.returningMagazine({
            magazine: a.item as Magazine,
          });
        } else {
          return BorrowActions.borrowEmpty;
        }
      })
    );
  },
  { functional: true }
);

export const tappingEffect$ = createEffect(
  (store$: Store = inject(Store)) => {
    return timer(0, 60000).pipe(
      map(() => {
        return BorrowActions.update();
      })
    );
  },
  { functional: true }
);
