import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import * as appActions from 'src/app/actions/app.actions';
import * as libraryActions from '../actions/library.actions';
import { BookEntity } from '../reducer/books.reducer';

const apiUrl = 'https://movies-api.7inyd4nc3r.now.sh';

@Injectable()
export class LibraryEffects {
  constructor(private actions$: Actions, private http: HttpClient) { }

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      switchMap(() => this.http.get<GetBooksResponse>(`${apiUrl}/books`)
        .pipe(
          tap(response => console.log(response)),
          map(response => response.books),
          map(movies => libraryActions.loadBooksSuccess({ payload: movies })),
        )
      )
    ), { dispatch: true }
  );

}

interface GetBooksResponse {
  books: BookEntity[]
}