import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addBook(titleEl: HTMLInputElement, authorEl: HTMLInputElement, formatEl: HTMLInputElement) {
    const newBook = { // missing id (?)
      title: titleEl.value,
      author: authorEl.value,
      format: formatEl.value
    };
    console.log(newBook);
  }

}
