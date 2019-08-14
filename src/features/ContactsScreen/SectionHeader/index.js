// @flow
import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

type Props = $ReadOnly<{|
  title: string,
|}>;

const SectionHeader = ({ title }: Props) => (
  <Text style={styles.root}>{title}</Text>
);

export default SectionHeader;
