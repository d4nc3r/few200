import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addBook } from '../../actions/library.actions';
import { LibraryState } from '../../reducer';

@Component({
  selector: 'lib-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent implements OnInit {

  constructor(private store: Store<LibraryState>) { }

  ngOnInit() {
  }

  addBook(titleEl: HTMLInputElement, authorEl: HTMLInputElement, formatEl: HTMLInputElement) {
    const newBook = {
      title: titleEl.value,
      author: authorEl.value,
      format: formatEl.value
    };

    // call store, dispatch an action to add a book
    this.store.dispatch(addBook({ ...newBook }))
  }

}
