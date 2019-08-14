// @flow
import { createAction } from 'redux-actions';

import { CREATE_USER, REMOVE_USER, UPDATE_USER } from './actionTypes';
import type { User, UserAttributes, UserId } from './types.js';

export const createUser = createAction<*, UserAttributes>(CREATE_USER);

export const removeUser = createAction<*, UserId>(REMOVE_USER);

export const updateUser = createAction<*, User>(UPDATE_USER);
