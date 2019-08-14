// @flow
import { combineReducers } from 'redux';

import users from '@/features/users/reducer';

const appReducer = combineReducers({ users });

export default appReducer;
