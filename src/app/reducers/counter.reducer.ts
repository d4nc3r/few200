import { Action, createReducer, on } from '@ngrx/store';
import * as actions from 'src/app/actions/counter.actions';

// make Typscript happy
export interface CounterState {
  current: number;
  countBy: number;
}

const initialState: CounterState = {
  current: 0,
  countBy: 1
};

export function reducer(state: CounterState, action: Action): CounterState {
  return myReducer(state, action);
}

const myReducer = createReducer(
  initialState,
  on(actions.reset, () => initialState),
  on(actions.decrement, (state) => ({ ...state, current: state.current - state.countBy })),
  on(actions.increment, (state) => ({ ...state, current: state.current + state.countBy })),
  on(actions.countBySet, (state, action) => ({ ...state, countBy: action.countBy }))
);
