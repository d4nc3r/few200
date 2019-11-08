import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookEntryComponent } from './components/book-entry/book-entry.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { LibraryEffects } from './effects/library.effects';
import { LibraryComponent } from './library.component';
import { featureName, reducers } from './reducer';



@NgModule({
  declarations: [LibraryComponent, BookEntryComponent, BookListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([LibraryEffects])
  ]
})
export class LibraryModule { }
