import { CoreState } from './core-state.state';
import {
  MemoizedSelector,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

export const featureKey = 'core';

const getTestProp = (state: CoreState): string => state.testProp;

export const selectCoreState: MemoizedSelector<
  object,
  CoreState
> = createFeatureSelector<CoreState>(featureKey);

export const selectCoreTestProp: MemoizedSelector<
  object,
  string
> = createSelector(selectCoreState, getTestProp);
