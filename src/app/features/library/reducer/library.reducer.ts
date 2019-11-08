import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer } from '@ngrx/store';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface State extends EntityState<BookEntity> {

}

export const adapter = createEntityAdapter<BookEntity>();

// const initialState = adapter.getInitialState();
const initialState: State = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', title: 'Lord of the Rings', author: 'Tolkien', format: 'hardcover' },
    2: { id: '2', title: 'Old Man\'s War', author: 'Scalzi', format: 'audiobook' },
  }
};

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: State = initialState, action: Action) {
  return reducerFunction(state, action);
}



