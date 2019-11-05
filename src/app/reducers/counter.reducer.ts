import { Action } from '@ngrx/store';

// make Typscript happy
export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 0
};

export function reducer(state: CounterState = initialState, action: Action): CounterState {
  // actions to handle, "increment" and "decrement"
  switch (action.type) {
    case 'increment':
      // return a whole new state
      return {
        current: state.current + 1
      };
    case 'decrement':
      return {
        current: state.current - 1
      };
    case 'reset':
      return {
        current: 0
      };
    default:
      return state;
  }
}
