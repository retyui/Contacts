import { useCallback } from 'react';
import { useDispatch, useSelector as useReduxSelector } from 'react-redux';

const defaultDeps = [];

export const useSelector = (selectorFn, selectorDeps = defaultDeps) => {
  const memoizedSelector = useCallback(
    state => selectorFn(state, ...selectorDeps),
    [selectorDeps, selectorFn],
  );

  return useReduxSelector(memoizedSelector);
};

export { useDispatch };
