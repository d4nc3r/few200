import { createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

// TypeScript wants an interface for our app state
export interface AppState {
  counter: fromCounter.CounterState;
}

// map of all the reducer functions for the app (module needs it)
export const reducers = {
  counter: fromCounter.reducer
};

// Selectors (selector functions)

// 1. if this is a feature, create a feature selector

// 2. create a selector for each "branch" of the state tree
const selectCounterBranch = (state: AppState) => state.counter;

// 3. Create "Helpers" (optional)

// 4. create teh selectors you need for the components
export const selectCurrentCount = createSelector(selectCounterBranch, b => b.current);
export const selectCountBy = createSelector(selectCounterBranch, b => b.countBy);

export const selectDecrementDisabled = createSelector(
  selectCurrentCount,
  selectCountBy,
  (current, countBy) => current - countBy < 0
);
