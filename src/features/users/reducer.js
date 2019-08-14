// @flow
import { handleActions } from 'redux-actions';

import { omit } from 'ramda';
import { generateRandomId } from '@/utils/rand';

import { CREATE_USER, REMOVE_USER, UPDATE_USER } from './actionTypes';

const users = handleActions(
  {
    [CREATE_USER]: (state, { payload: userOptions }) => {
      const id = generateRandomId();

      return {
        ...state,
        [id]: {
          ...userOptions,
          id,
        },
      };
    },
    [UPDATE_USER]: (state, { payload: { id, ...rest } }) => ({
      ...state,
      [id]: {
        ...state[id],
        ...rest,
      },
    }),
    [REMOVE_USER]: (state, { payload: userId }) => omit(state, [userId]),
  },
  {},
);

export default users;
