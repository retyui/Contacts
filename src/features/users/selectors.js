// @flow
import { head, groupBy, pipe, toPairs, map, prop, keys, sortBy } from 'ramda';
import { createSelector } from 'reselect';

import { hasSubString } from './utils';

import type { UserAttributes, UserId } from './types';

const getRoot = prop('users');

export const getAllUsersIds = createSelector(
  getRoot,
  map => keys(map),
);

const getUserPropById = <Prop: $Keys<UserAttributes>>(propName: Prop) => (
  state: any,
  id: UserId,
): $ElementType<UserAttributes, Prop> => getRoot(state)[id][propName];

export const getUserFirstName = getUserPropById<'firstName'>('firstName');

export const getUserLastName = getUserPropById('lastName');

export const getUserEmail = getUserPropById('email');

export const getUserPhoneNumber = getUserPropById('phoneNumber');

export const getFirstLetter = pipe(
  getUserFirstName,
  head,
);

export const getUserInitials = (state, id: UserId): string => {
  const first = getUserFirstName(state, id);
  const last = getUserLastName(state, id);

  if (last) {
    return `${head(first)} ${head(last)}`;
  }

  return head(first);
};

export const getUserFullName = (state, id: UserId): string => {
  const first = getUserFirstName(state, id);
  const last = getUserLastName(state, id);

  if (last) {
    return `${first} ${last}`;
  }

  return first;
};

export const getFilteredIds = (state, query: string) => {
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

export const getIndexByFirstLetter = (state, query: string) => {
  const ids = getFilteredIds(state, query);

  return pipe(
    groupBy(id => getFirstLetter(state, id)),
    toPairs,
    map(([key, data]) => ({ key, data })),
    sortBy(prop('key')),
  )(ids);
};
