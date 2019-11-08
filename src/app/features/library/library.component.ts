import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LibraryState, selectBooks } from './reducer';
import { BookEntity } from './reducer/books.reducer';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  books$: Observable<BookEntity[]>;

  constructor(private store: Store<LibraryState>) { }

  ngOnInit() {
    this.books$ = this.store.select(selectBooks);
  }

}
