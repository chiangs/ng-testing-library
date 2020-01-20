import { MemoizedSelector, createSelector } from '@ngrx/store';
import { CoreSelectors, CoreState } from '../core/core-store';
import { State } from './root-state';

export const selectCore = (state: State) => state.core;

export const selectCoreTestProp = createSelector(
  selectCore,
  (state: CoreState.CoreState) => state.testProp
);
