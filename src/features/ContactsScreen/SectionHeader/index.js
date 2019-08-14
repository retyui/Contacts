// @flow
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

type Props = $ReadOnly<{|
  title: string,
|}>;

const SectionHeader = ({ title }: Props) => (
  <View style={styles.root}>
    <Text>{title}</Text>
  </View>
);

export default SectionHeader;
