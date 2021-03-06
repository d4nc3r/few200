import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as appActions from 'src/app/actions/app.actions';
import * as listActions from '../actions/list.actions';
import { MovieEntity } from '../reducers/list.reducer';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ListEffects {
  constructor(private actions$: Actions, private http: HttpClient) { }

  // on application start, it's going to go get the movies from the API
  // and on success, return the list of movies in an action
  // and on failure, do something else
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      switchMap(() => this.http.get<GetAllResponse>('http://localhost:3000/movies')
        .pipe(
          map(response => response.movies),
          map(movies => listActions.loadMoviesSuccess({ movies })),
          catchError(err => of(listActions.loadMovieFailure({ error: 'Could not load movies!' })))
        )
      )
    )
  );

  addMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listActions.addMovie),
      map(action => action.payload),
      switchMap(origMovie => this.http.post<MovieEntity>('http://localhost:3000/movies', {
        title: origMovie.title,
        rentalPrice: origMovie.rentalPrice,
        rentalDays: origMovie.rentalDays
      }).pipe(
        map(addedMovie => listActions.addMovieSuccess({ oldId: origMovie.id, payload: addedMovie }))
      )),
    ), { dispatch: true }
  );
}

interface GetAllResponse {
  movies: MovieEntity[];
}
