import { useCallback } from 'react';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';

const defaultDeps = [];

export const useSelector = (selectorFn, selectorDeps = defaultDeps) => {
  const memoizedSelector = useCallback(
    state => selectorFn(state, ...selectorDeps),
    [selectorDeps, selectorFn],
  );

  return useReduxSelector(memoizedSelector);
};

export const useDispatch = useReduxDispatch;
