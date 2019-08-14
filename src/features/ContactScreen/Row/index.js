// @flow
import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

type Props = $ReadOnly<{|
  children: string,
  label: string,
  onPress?: () => mixed,
|}>;

const RowText = ({ children, label, onPress }: Props) => (
  <View style={styles.root}>
    <Text style={styles.labelText}>{label}</Text>
    <Text onPress={onPress} style={styles.valueText}>
      {children}
    </Text>
  </View>
);

export default RowText;
