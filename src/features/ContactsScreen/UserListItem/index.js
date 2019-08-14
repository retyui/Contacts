// @flow
import React from 'react';
import { Text, View } from 'react-native';

import TextAvatar from '@/components/TextAvatar';
import Touchable from '@/components/Touchable';
import useOpenContactScreen from '@/features/ContactScreen/hooks/useOpenEditScreen';
import {
  getUserFullName,
  getUserInitials,
  getUserPhoneNumber,
} from '@/features/users/selectors';
import { useSelector } from '@/redux/hooks';

import styles from './styles';

type Props = $ReadOnly<{|
  userId: string,
|}>;

const UserListItem = ({ userId }: Props) => {
  const userInitials = useSelector(getUserInitials, [userId]);
  const fullName = useSelector(getUserFullName, [userId]);
  const phoneNumber = useSelector(getUserPhoneNumber, [userId]);

  const onPress = useOpenContactScreen(userId);

  return (
    <Touchable onPress={onPress}>
      <View style={styles.root}>
        <TextAvatar>{userInitials}</TextAvatar>
        <View style={styles.textRoot}>
          <Text style={styles.fullNameText}>{fullName}</Text>
          <Text style={styles.phoneText}>{phoneNumber}</Text>
        </View>
      </View>
    </Touchable>
  );
};

export default UserListItem;
