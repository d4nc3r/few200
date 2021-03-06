import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { TodosComponent } from './components/todos/todos.component';
import { ListComponent } from './components/todos/list/list.component';
import { EntryComponent } from './components/todos/entry/entry.component';
import { TodoDataService } from './services/todo-data.service';
import { StatusComponent } from './components/todos/status/status.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { CounterComponent } from './components/counter/counter.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effects';
import { MoviesModule } from './features/movies/movies.module';

@NgModule({
  declarations: [
    AppComponent,
    TipCalculatorComponent,
    HomeComponent,
    NavComponent,
    TodosComponent,
    ListComponent,
    EntryComponent,
    StatusComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects]),
    MoviesModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent] // root level module
})
export class AppModule { }
