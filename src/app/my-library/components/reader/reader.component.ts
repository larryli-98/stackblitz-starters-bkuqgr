import {
  AfterContentInit,
  Component,
  Input,
  inject,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { Store } from '@ngrx/store';
import { LetDirective } from '@ngrx/component';
import { Observable, EMPTY, of } from 'rxjs';
import { selectMyReadings, selectIsCheckingOut } from '../../ngrx/selectors';
import { BorrowActions, checkout } from '../../ngrx/actions';
import { Borrowable } from '../../models';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    LetDirective,
    MatMenuModule,
    MatMenuTrigger,
  ],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.scss',
})
export class ReaderComponent implements AfterContentInit {
  private store: Store = inject(Store);
  @ViewChild(MatMenuTrigger) contextMenu!: MatMenuTrigger;
  @Input() name: string = '';
  @Input() readerId: string = '';
  isCheckingOut$: Observable<boolean> = of(false);
  myReading$: Observable<any> = EMPTY;

  ngAfterContentInit() {
    this.isCheckingOut$ = this.store.select(selectIsCheckingOut(this.readerId));
    this.myReading$ = this.store.select(selectMyReadings(this.readerId));
  }

  checkout(): void {
    this.store.dispatch(checkout({ readerId: this.readerId }));
  }
  contextMenuPosition = { x: '0px', y: '0px' };

  onContextMenu(event: MouseEvent, item: Borrowable) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { item: item };
    this.contextMenu.menu?.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  returning(item: any) {
    this.store.dispatch(BorrowActions.returning({ item: item }));
  }
}
