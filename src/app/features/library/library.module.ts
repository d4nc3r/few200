import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { BookEntryComponent } from './components/book-entry/book-entry.component';
import { BookListComponent } from './components/book-list/book-list.component';



@NgModule({
  declarations: [LibraryComponent, BookEntryComponent, BookListComponent],
  imports: [
    CommonModule
  ]
})
export class LibraryModule { }
