// @flow
import React from 'react';
import { Text, View } from 'react-native';

import styles, { getRootStylesBySize, getTextStylesBySize } from './styles';

type Props = $ReadOnly<{|
  children: string,
  size?: number,
  style?: {},
|}>;

const TextAvatar = ({ children, size = 50, style }: Props) => (
  <View style={[styles.root, getRootStylesBySize(size), style]}>
    <Text style={[styles.text, getTextStylesBySize(size)]}>{children}</Text>
  </View>
);

export default TextAvatar;
