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

@NgModule({
  declarations: [
    AppComponent,
    TipCalculatorComponent,
    HomeComponent,
    NavComponent,
    TodosComponent,
    ListComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // root level module
})
export class AppModule { }
