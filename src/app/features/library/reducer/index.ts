import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBooks from './books.reducer';

export const featureName = 'libraryFeature';

export interface LibraryState {
  books: fromBooks.State
}

export const reducers = {
  books: fromBooks.reducer
}

/************
* Selectors *
*************/

// 1. Feature Selector
const selectLibraryFeature = createFeatureSelector<LibraryState>(featureName);

// 2. Selector per branch
const selectBooksBranch = createSelector(selectLibraryFeature, l => l.books);

// 3. Helpers (optional)
const { selectAll: selectBooksArray } = fromBooks.adapter.getSelectors(selectBooksBranch);

// 4. Selectors for the components
export const selectBooks = createSelector(selectBooksArray, books => books);