// @flow
import { createUser, removeUser, updateUser } from '../actions';
import reducer from './users';

it('should add new user', () => {
  const state = undefined;
  const action = createUser({
    id: '1',
    firstName: 'first',
    phoneNumber: '123',
  });

  expect(reducer(state, action)).toEqual({
    '1': { firstName: 'first', id: '1', phoneNumber: '123' },
  });
});

it('should remove user', () => {
  const state = {
    '1': { firstName: 'user1', id: '1', phoneNumber: '123' },
    '2': { firstName: 'user2', id: '2', phoneNumber: '321,' },
  };
  const action = removeUser('2');

  expect(reducer(state, action)).toEqual({
    '1': { firstName: 'user1', id: '1', phoneNumber: '123' },
  });
});

it('should update part props of user', () => {
  const state = {
    '1': { firstName: 'user1', id: '1', phoneNumber: '123' },
    '2': { firstName: 'user2', id: '2', phoneNumber: '321,' },
  };
  const action = updateUser({
    id: '2',
    firstName: 'newUserName2',
    email: 'email@text.com',
    lastName: 'last2',
  });

  expect(reducer(state, action)).toEqual({
    '1': { firstName: 'user1', id: '1', phoneNumber: '123' },
    '2': {
      id: '2',
      phoneNumber: '321,',
      firstName: 'newUserName2',
      email: 'email@text.com',
      lastName: 'last2',
    },
  });
});
