import { Action, createReducer, on } from '@ngrx/store';
import * as actions from 'src/app/actions/counter.actions';

// make Typscript happy
export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
};

export function reducer(state: CounterState, action: Action): CounterState {
  return myReducer(state, action);
}

const myReducer = createReducer(
  initialState,
  on(actions.reset, () => initialState),
  on(actions.increment, (state) => ({ current: state.current + 1 })),
  on(actions.decrement, (state) => ({ current: state.current - 1 }))
);
