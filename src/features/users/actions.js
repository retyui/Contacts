// @flow
import { type ActionType, createAction } from 'redux-actions';

import { CREATE_USER, REMOVE_USER, UPDATE_USER } from './actionTypes';
import type { User, UserId } from './types.js';

export const createUser = createAction<*, User>(CREATE_USER);

export const removeUser = createAction<*, UserId>(REMOVE_USER);

export const updateUser = createAction<*, $Shape<User>>(UPDATE_USER);

export type CreateUserActionType = ActionType<typeof createUser>;
export type RemoveUserActionType = ActionType<typeof removeUser>;
export type UpdateUserActionType = ActionType<typeof updateUser>;
