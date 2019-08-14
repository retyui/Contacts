// @flow
export type UserId = string;

export type UserAttributes = {|
  firstName: string,
  lastName?: string,
  phoneNumber: string,
  email?: string,
|};

export type User = {|
  ...UserAttributes,
  id: UserId,
|};
