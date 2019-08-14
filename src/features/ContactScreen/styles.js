// @flow
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const AVATAR_SIZE = Math.min(width, height) * 0.4;

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  userCard: {
    marginTop: AVATAR_SIZE / 2 + 20,
  },
  avatar: {
    marginTop: -AVATAR_SIZE / 2,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
