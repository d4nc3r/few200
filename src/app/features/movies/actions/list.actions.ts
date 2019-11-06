import { createAction, props } from '@ngrx/store';
import { MovieEntity } from '../reducers/list.reducer';

let id = 3;

export const addMovie = createAction(
  '[movies] added a movie',
  ({ title, rentalDays, rentalPrice }: { title: string, rentalDays: number, rentalPrice: number }) => ({
    payload: {
      id: 'T' + (++id).toString(),
      title,
      rentalDays,
      rentalPrice
    } as MovieEntity
  })
);

export const addMovieSuccess = createAction(
  '[movies] added movie successfully',
  props<{ oldId: string, payload: MovieEntity }>()
);

export const addMovieFailure = createAction(
  '[movies] failed to add movie',
  props<{ errorMessage: string, badMovie: MovieEntity }>()
);

export const loadMoviesSuccess = createAction(
  '[movies] loaded movies successfully',
  props<{ movies: MovieEntity[] }>()
);

export const loadMovieFailure = createAction(
  '[movies] failed to load movies',
  props<{ error: string }>()
);
