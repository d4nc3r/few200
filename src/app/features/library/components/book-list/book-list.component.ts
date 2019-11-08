import { Component, Input, OnInit } from '@angular/core';
import { BookEntity } from '../../reducer/books.reducer';

@Component({
  selector: 'lib-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Input() model: BookEntity[];

  constructor() { }

  ngOnInit() {
  }

}
