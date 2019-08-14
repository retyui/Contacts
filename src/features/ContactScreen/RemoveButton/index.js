// @flow
import React, { useCallback, useEffect, useRef } from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import { removeUser } from '@/features/users/actions';
import { useDispatch } from '@/redux/hooks';

import styles from './styles';
import { askRemove } from './utils';

type Props = $ReadOnly<{|
  userId: string,
|}>;

const RemoveButton = ({ userId }: Props) => {
  const shouldRemoveRef = useRef(false);
  const dispatch = useDispatch();
  const { goBack } = useNavigation();
  const onPress = useCallback(
    () =>
      askRemove().then(buttonName => {
        if (buttonName === 'ok') {
          shouldRemoveRef.current = true;
          goBack();
        }
      }),

    [shouldRemoveRef, goBack],
  );

  useEffect(
    () => () => {
      if (shouldRemoveRef.current) {
        dispatch(removeUser(userId));
      }
    },

    [dispatch, userId],
  );

  return (
    <View style={styles.root}>
      <Button title="remove" onPress={onPress} />
    </View>
  );
};

export default RemoveButton;
