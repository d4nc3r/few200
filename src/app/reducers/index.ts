import * as fromCounter from './counter.reducer';

// TypeScript wants an interface for our app state
export interface AppState {
  counter: fromCounter.CounterState;
}

// map of all the reducer functions for the app (module needs it)
export const reducers = {
  counter: fromCounter.reducer
};
