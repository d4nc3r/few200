import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TipCalculatorComponent } from './components/tip-calculator/tip-calculator.component';
import { TodosComponent } from './components/todos/todos.component';
import { CounterComponent } from './components/counter/counter.component';
import { MoviesComponent } from './features/movies/movies.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tip',
    component: TipCalculatorComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
