import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';

import * as actions from '../actions/list.actions';

export interface MovieEntity {
  id: string;
  title: string;
  rentalDays: number;
  rentalPrice: number;
}

export interface State extends EntityState<MovieEntity> {

}

export const adapter = createEntityAdapter<MovieEntity>();

const initialState = adapter.getInitialState();
// const initialState: State = {
//   ids: ['1', '2', '3'],
//   entities: {
//     1: { id: '1', title: 'Lion King', rentalDays: 3, rentalPrice: 2.99 },
//     2: { id: '2', title: 'Moana', rentalDays: 3, rentalPrice: 3.99 },
//     3: { id: '3', title: 'Cinderella', rentalDays: 3, rentalPrice: 5.99 }
//   }
// };

const reducerFunction = createReducer(
  initialState,
  on(actions.addMovie, (state, action) => adapter.addOne(action.payload, state)),
  on(actions.loadMoviesSuccess, (state, action) => adapter.addAll(action.movies, state)),
  on(actions.addMovieSuccess, (state, action) => {
    const tempState = adapter.removeOne(action.oldId, state);
    return adapter.addOne(action.payload, tempState);
  })
);

export function reducer(state: State = initialState, action: Action) {
  return reducerFunction(state, action);
}



