import { Component, inject, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Book, Category, Magazine, Newspaper } from '../../models';
import { BorrowActions } from '../../ngrx/actions';
import { selectCheckoutReader } from '../../ngrx/selectors';

@Component({
  selector: 'app-shelf',
  standalone: true,
  imports: [
    CommonModule,
    LetDirective,
    MatTableModule,
    MatMenuModule,
    MatMenuTrigger,
  ],
  templateUrl: './shelf.component.html',
  styleUrls: ['../share/component-style.scss', './shelf.component.scss'],
})
export class ShelfComponent<Item extends Book | Newspaper | Magazine> {
  @ViewChild(MatMenuTrigger) contextMenu!: MatMenuTrigger;
  @Input() items$!: Observable<Item[]>;
  @Input() title!: string;
  store: Store = inject(Store);
  displayedColumns: string[] = ['name', 'availability'];
  currentReader$ = this.store.select(selectCheckoutReader);
  resolveCategory = Category;
  now: Date = new Date();

  contextMenuPosition = { x: '0px', y: '0px' };

  onContextMenu(event: MouseEvent, item: Item, currentReaderId?: any) {
    event.preventDefault();
    if (currentReaderId) {
      this.contextMenuPosition.x = event.clientX + 'px';
      this.contextMenuPosition.y = event.clientY + 'px';
      this.contextMenu.menuData = { item: item };
      this.contextMenu.menu?.focusFirstItem('mouse');
      this.contextMenu.openMenu();
    }
  }

  borrow(item: Item) {
    this.store.dispatch(BorrowActions.borrow({ item: item }));
  }

  reserve(item: Item) {
    this.store.dispatch(BorrowActions.reserve({ item: item }));
  }

  returning(item: Item) {
    this.store.dispatch(BorrowActions.returning({ item: item }));
  }
}
