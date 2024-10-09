import { Component, inject, HostListener, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ReaderComponent } from './components/reader/reader.component';
import { ShelfComponent } from './components/shelf/shelf.component';
import {
  selectBookShelf,
  selectMagazineRack,
  selectNewspaperRack,
  selectCheckoutReader,
} from './ngrx/selectors';
import { checkout } from './ngrx/actions';
import { Book } from './models';

@Component({
  selector: 'app-my-library',
  standalone: true,
  imports: [ShelfComponent, ReaderComponent],
  templateUrl: './my-library.component.html',
  styleUrl: './my-library.component.scss',
})
export class MyLibraryComponent {
  private store: Store = inject(Store);
  private eRef: ElementRef = inject(ElementRef);
  books$: Observable<Book[]> = this.store.select(selectBookShelf);
  newspapers$ = this.store.select(selectNewspaperRack);
  magazines$ = this.store.select(selectMagazineRack);
  checkoutReader$ = this.store.select(selectCheckoutReader);
  onMouseClick(event: any) {
    if (
      ['flex-container', 'flex-content', 'flex-footer'].includes(
        event.target.className
      )
    ) {
      this.store.dispatch(checkout({ readerId: undefined }));
    }
  }
}
