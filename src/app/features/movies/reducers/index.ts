import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieListItem } from '../models';

export const featureName = 'moviesFeature';

export interface MoviesState {
  list: fromList.State;
}

export const reducers = {
  list: fromList.reducer
};

/************
* Selectors *
*************/

// 1. Feature Selector
const selectMoviesFeature = createFeatureSelector<MoviesState>(featureName);

// 2. Selector per branch
const selectListBranch = createSelector(selectMoviesFeature, m => m.list);

// 3. Helpers (optional)
const { selectAll: selectListArray } = fromList.adapter.getSelectors(selectListBranch);
// selectIds - gets the ids
// selectEntities - gets the entities
// selectTotal - gets number of entities
// selectAll - gets an array of the entities

// 4. What the components need
// TODO: we need a selector that returns a MoveiListItem[]
// entities is an object, not an array, how do we turn this into an array?
export const selectMovieListItems = createSelector(
  selectListArray,
  movies => movies.map(movie => ({
    ...movie,
    isTemporary: movie.id.startsWith('T')
  })) as MovieListItem[]
);
