// @flow
import { type Action, combineReducers } from 'redux';

import usersReducers from '@/features/users/reducers';

const appReducer = combineReducers<*, Action<any>>({
  ...usersReducers,
});

export default appReducer;
