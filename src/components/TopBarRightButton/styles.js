// @flow
import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    paddingRight: Platform.select({ android: 20, ios: 10 }),
  },
});
