// @flow
import { assoc, mergeDeepRight, omit } from 'ramda';
import { handleActions } from 'redux-actions';

import type {
  CreateUserActionType,
  RemoveUserActionType,
  UpdateUserActionType,
} from '../actions';
import { CREATE_USER, REMOVE_USER, UPDATE_USER } from '../actionTypes';
import type { User } from '../types';
import defaultState from './data';

export type State = {
  +[string]: User,
};

const users = handleActions<State, *>(
  {
    [CREATE_USER]: (
      state: State,
      { payload: { id, ...userOptions } }: CreateUserActionType,
    ) => assoc(id, { ...userOptions, id }, state),
    [UPDATE_USER]: (
      state: State,
      { payload: { id, ...userOptions } }: UpdateUserActionType,
    ) => mergeDeepRight(state, { [id]: { ...userOptions, id } }),
    [REMOVE_USER]: (state: State, { payload: userId }: RemoveUserActionType) =>
      omit([userId], state),
  },
  defaultState,
);

export default users;
