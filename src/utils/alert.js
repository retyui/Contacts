// @flow
import { Alert } from 'react-native';

export const openAlertAsync = <Buttons: {}>(
  title: string,
  message: string,
  buttons: Buttons,
): Promise<$Keys<Buttons> | 'dismiss'> =>
  new Promise(res => {
    const buttonsArray = Object.entries(buttons).map(([name, btnOptions]) => ({
      ...btnOptions,
      // $FlowFixMe
      onPress: () => res(name),
    }));

    Alert.alert(title, message, buttonsArray, {
      cancelable: false,
      onDismiss: () => res('dismiss'),
    });
  });
