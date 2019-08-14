// @flow
import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

type Props = $ReadOnly<{|
  error: ?string,
|}>;

const FieldErrorMessage = ({ error }: Props) =>
  error ? <Text style={styles.root}>{error}</Text> : null;

export default FieldErrorMessage;
