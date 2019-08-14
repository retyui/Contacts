// @flow
import {
  groupBy,
  head,
  keys,
  map,
  path,
  pipe,
  prop,
  sortBy,
  toPairs,
} from 'ramda';

import { USERS_STORE_KEY } from './consts';
import {
  EMAIL_ADDRESS_KEY,
  FIRST_NAME_KEY,
  LAST_NAME_KEY,
  PHONE_NUMBER_KEY,
} from './consts/keys';
import type { State as UserState } from './reducers/users';
import type { UserAttributes, UserId } from './types';
import { hasSubString } from './utils';

type State = {
  +users: UserState,
};

const getRoot = prop(USERS_STORE_KEY);

export const getAllUsersIds = pipe(
  getRoot,
  keys,
);

const getUserPropById = <Key: *>(propName: Key) => (
  state: State,
  userId: UserId,
): $ElementType<UserAttributes, Key> =>
  pipe(
    getRoot,
    path([userId, propName]),
  )(state);

export const getUserFirstName = getUserPropById(FIRST_NAME_KEY);

export const getUserLastName = getUserPropById(LAST_NAME_KEY);

export const getUserEmail = getUserPropById(EMAIL_ADDRESS_KEY);

export const getUserPhoneNumber = getUserPropById(PHONE_NUMBER_KEY);

export const getFirstLetter = pipe(
  getUserFirstName,
  head,
);

export const getUserInitials = (state: State, userId: UserId): string => {
  const first = getUserFirstName(state, userId);
  const last = getUserLastName(state, userId);

  if (last) {
    return `${head(first)}${head(last)}`;
  }

  return head(first);
};

export const getUserFullName = (state: State, userId: UserId): string => {
  const first = getUserFirstName(state, userId);
  const last = getUserLastName(state, userId);

  if (last) {
    return `${first} ${last}`;
  }

  return first;
};

export const getFilteredIds = (state: State, query: string) => {
  const allIds = getAllUsersIds(state);

  if (!query) {
    return allIds;
  }

  return allIds.filter(userId => {
    const fullName = getUserFullName(state, userId);
    const email = getUserEmail(state, userId);
    const phone = getUserPhoneNumber(state, userId);

    return hasSubString(query, [fullName, email, phone].filter(Boolean));
  });
};

export const getIndexByFirstLetter = (state: State, query: string) => {
  const ids = getFilteredIds(state, query);

  return pipe(
    groupBy(id => getFirstLetter(state, id)),
    toPairs,
    map(([key, data]) => ({ key, data })),
    sortBy(prop('key')),
  )(ids);
};
