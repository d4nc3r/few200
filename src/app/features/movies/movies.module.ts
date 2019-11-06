import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [MoviesComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule
  ],
  exports: [MoviesComponent]
})
export class MoviesModule { }
