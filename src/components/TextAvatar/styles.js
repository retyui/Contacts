// @flow
import { StyleSheet } from 'react-native';

export const getRootStylesBySize = (size: number) => ({
  width: size,
  height: size,
  borderRadius: size,
});

export const getTextStylesBySize = (size: number) => ({
  fontSize: size / 2.8,
});

export default StyleSheet.create({
  root: {
    backgroundColor: '#bbb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textTransform: 'uppercase',
    color: '#fff',
  },
});
