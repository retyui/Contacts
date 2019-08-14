// @flow
import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './styles';

type Props = $ReadOnly<{|
  value: string,
  onChangeText: string => mixed,
|}>;

const SearchInput = ({ value, onChangeText }: Props) => (
  <View style={styles.root}>
    <TextInput
      style={styles.input}
      placeholder="Search client by name, phone, or email"
      value={value}
      onChangeText={onChangeText}
      returnKeyType="search"
    />
  </View>
);

export default SearchInput;
