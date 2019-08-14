// @flow
import React, { type ElementConfig } from 'react';
import { Button, Platform, View } from 'react-native';

import styles from './styles';

type Props = ElementConfig<typeof Button>;

const color = Platform.select({ android: '#000' });

const TopBarRightButton = (props: Props) => (
  <View style={styles.root}>
    <Button color={color} {...props} />
  </View>
);

export default TopBarRightButton;
