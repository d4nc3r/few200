import { Component, OnInit } from '@angular/core';
import { MovieListItem } from './models';
import { Store } from '@ngrx/store';
import { MoviesState, selectMovieListItems } from './reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieList$: Observable<MovieListItem[]>;

  constructor(private store: Store<MoviesState>) { }

  ngOnInit() {
    this.movieList$ = this.store.select(selectMovieListItems);
  }

}
