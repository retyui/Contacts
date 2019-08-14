// @flow
import type { Action } from 'redux';

import type { ReduxState } from '@/types';

import {
  useDispatch as baseUseDispatch,
  useSelector as baseUseSelector,
} from './implementation';

type UseSelectorFn = {
  <R>(fn: (ReduxState) => R, deps?: Array<empty>): R,
  <R, A1, Deps: [A1]>(fn: (ReduxState, A1) => R, deps: Deps): R,
  <R, A1, A2, Deps: [A1, A2]>(fn: (ReduxState, A1, A2) => R, deps: Deps): R,
};

export const useSelector: UseSelectorFn = baseUseSelector;
export const useDispatch: () => (action: Action<any>) => void = baseUseDispatch;
