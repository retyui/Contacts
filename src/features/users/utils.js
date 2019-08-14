// @flow
import { toLower, replace, pipe } from 'ramda';

const removeSpaces = replace(/\s/g, '');

const processString = pipe(
  removeSpaces,
  toLower,
);

export const hasSubString = (query: string, values: Array<string>) =>
  values.some(value => processString(value).includes(processString(query)));
