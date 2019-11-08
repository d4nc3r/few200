import { createAction, props } from '@ngrx/store';
import { BookEntity } from '../reducer/books.reducer';

let id = 2;

export const addBook = createAction(
  '[Library] add new book',
  ({ title, author, format }: { title: string, author: string, format: string }) => ({
    payload: {
      id: 'T' + (++id).toString(),
      title,
      author,
      format
    } as BookEntity
  })
);

export const addBookSuccess = createAction(
  '[Library] add new book succeeded',
  props<{ oldId: string, payload: BookEntity }>()
);

export const addBookFailure = createAction(
  '[Library] failed to add new book',
  props<{ errorMsg: string, payload: BookEntity }>()
);

export const loadBooksSuccess = createAction(
  '[Library] loaded books successfully',
  props<{ payload: BookEntity[] }>()
);
