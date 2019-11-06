import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MoviesComponent } from './movies.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { featureName, reducers } from './reducers';
import { ListEffects } from './effects/list.effects';

@NgModule({
  declarations: [MoviesComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([ListEffects])
  ],
  exports: [MoviesComponent]
})
export class MoviesModule { }
