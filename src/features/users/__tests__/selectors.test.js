// @flow
import { fromPairs } from 'ramda';
import {
  EMAIL_ADDRESS_KEY,
  PHONE_NUMBER_KEY,
  LAST_NAME_KEY,
  FIRST_NAME_KEY,
} from '../consts/keys';
import { getFilteredIds, getIndexByFirstLetter } from '../selectors';

const simulateUserState = usersPairs => ({
  users: fromPairs(usersPairs),
});

describe('getFilteredIds', () => {
  it('should return all ids when passed query string is empty', () => {
    const state = simulateUserState([['1', {}], ['2', {}]]);
    const query = '';

    expect(getFilteredIds(state, query)).toEqual(['1', '2']);
  });

  it('should return ids witch include query in email property', () => {
    const state = simulateUserState([
      ['1', { [EMAIL_ADDRESS_KEY]: '123' }],
      ['2', { [EMAIL_ADDRESS_KEY]: '12345' }],
      ['3', { [EMAIL_ADDRESS_KEY]: 'abc' }],
    ]);
    const query = '23';

    expect(getFilteredIds(state, query)).toEqual(['1', '2']);
  });

  it('should return ids witch include query in phone property', () => {
    const state = simulateUserState([
      ['1', { [PHONE_NUMBER_KEY]: '375(25)000-00-00' }],
      ['2', { [PHONE_NUMBER_KEY]: '375(25)111-11-11' }],
      ['3', { [PHONE_NUMBER_KEY]: '375(25)222-22-22' }],
    ]);
    const query = '111';

    expect(getFilteredIds(state, query)).toEqual(['2']);
  });

  it('should return ids witch include query in fullname property', () => {
    const state = simulateUserState([
      ['1', { [FIRST_NAME_KEY]: 'David', [LAST_NAME_KEY]: 'Nar' }],
      ['2', { [FIRST_NAME_KEY]: 'David', [LAST_NAME_KEY]: 'Ugar' }],
      ['3', { [FIRST_NAME_KEY]: 'David', [LAST_NAME_KEY]: 'Zpar' }],
    ]);
    const query = 'idug';

    expect(getFilteredIds(state, query)).toEqual(['2']);
  });
});

describe('getIndexByFirstLetter', () => {
  it('should create section index', () => {
    const state = simulateUserState([
      ['1', { [FIRST_NAME_KEY]: 'Alina' }],
      ['2', { [FIRST_NAME_KEY]: 'Alex' }],
      ['3', { [FIRST_NAME_KEY]: 'David' }],
    ]);
    const query = '';

    expect(getIndexByFirstLetter(state, query)).toEqual([
      { key: 'A', data: ['1', '2'] },
      { key: 'D', data: ['3'] },
    ]);
  });
});
