import { createAction } from '@ngrx/store';

export const increment = createAction(
  '[app counter] increment'
);

export const decrement = createAction(
  '[app counter] decrement'
);

export const reset = createAction(
  '[app counter] reset'
);
