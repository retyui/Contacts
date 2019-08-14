// @flow
import React, { type Element } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

type Props = $ReadOnly<{|
  children: Element<any>,
  label: string,
|}>;

const FieldRow = ({ children, label }: Props) => (
  <View style={styles.root}>
    <Text style={styles.labelText}>{label}</Text>
    {children}
  </View>
);

export default FieldRow;
