// @flow
import React, { type ElementConfig } from 'react';
import {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

type TouchableVariant = 'highlight' | 'opacity';
type Props = $ReadOnly<{|
  ...ElementConfig<typeof TouchableOpacity>,
  variant?: TouchableVariant,
|}>;

const DefaultComponent = Platform.select({
  android: TouchableNativeFeedback,
  ios: TouchableOpacity,
});

const componentsMap = {
  highlight: TouchableHighlight,
  opacity: TouchableOpacity,
};

const Touchable = ({ variant, ...rest }: Props) => {
  const Component = (variant && componentsMap[variant]) || DefaultComponent;

  return <Component {...rest} />;
};

export default Touchable;
