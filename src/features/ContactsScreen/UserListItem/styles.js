// @flow
import { StyleSheet } from 'react-native';

const PADDING_VERTICAL = 10;
export const AVATAR_SIZE = 50;
export const ITEM_HEIGHT = PADDING_VERTICAL * 2 + AVATAR_SIZE;

export default StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
    alignItems: 'center',
  },
  textRoot: {
    paddingLeft: 20,
  },
  fullNameText: {
    color: '#000',
  },
  phoneText: {
    color: '#000000aa',
  },
});
