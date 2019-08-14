// @flow
import React, { type Element, cloneElement } from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import { concatStyles } from '@/utils/styles';

type Props = $ReadOnly<{|
  label: string,
  children: Element<any>,
|}>;

const InputRow = ({ label, children }: Props) => (
  <View style={styles.root}>
    <Text style={styles.labelText}>{label}</Text>
    {cloneElement(children, {
      style: concatStyles(styles.child, children.props.style),
    })}
  </View>
);

export default InputRow;
