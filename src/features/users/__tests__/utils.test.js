// @flow
import { hasSubString } from '../utils';

it('should work properly', () => {
  expect(hasSubString('123', [])).toBe(false);
  expect(hasSubString('123', ['1', '2', '3'])).toBe(false);
  expect(hasSubString('1', ['123'])).toBe(true);
  expect(hasSubString('2', ['123'])).toBe(true);
  expect(hasSubString('3', ['123'])).toBe(true);
});

it('should ignore whitespaces', () => {
  expect(hasSubString('23', ['1 2 3'])).toBe(true);
});
