import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as libraryActions from '../actions/library.actions';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface State extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

const initialState = adapter.getInitialState();
// const initialState: State = {
//   ids: ['1', '2'],
//   entities: {
//     1: { id: '1', title: 'Lord of the Rings', author: 'Tolkien', format: 'hardcover' },
//     2: { id: '2', title: 'Old Man\'s War', author: 'Scalzi', format: 'audiobook' },
//   }
// };

const reducerFunction = createReducer(
  initialState,
  on(libraryActions.loadBooksSuccess, (state, action) => adapter.addAll(action.payload, state)),
  on(libraryActions.addBook, (state, action) => adapter.addOne(action.payload, state))
);

export function reducer(state: State = initialState, action: Action) {
  return reducerFunction(state, action);
}



