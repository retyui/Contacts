// @flow
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';

import TextAvatar from '@/components/TextAvatar';
import { getUserFullName, getUserInitials } from '@/features/users/selectors';
import { useSelector } from '@/redux/hooks';

import { USER_ID_PARAM } from './consts/screenParams';
import EditContactButton from './EditContactButton';
import EmailRow from './EmailRow';
import PhoneRow from './PhoneRow';
import Row from './Row';
import styles, { AVATAR_SIZE } from './styles';

const ContactScreen = () => {
  const userId: string = useNavigationParam(USER_ID_PARAM);
  const initials = useSelector(getUserInitials, [userId]);
  const fullName = useSelector(getUserFullName, [userId]);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.userCard}>
        <TextAvatar style={styles.avatar} size={AVATAR_SIZE}>
          {initials}
        </TextAvatar>
        <Row label="Name">{fullName}</Row>
        <PhoneRow userId={userId} />
        <EmailRow userId={userId} />
      </View>
    </SafeAreaView>
  );
};

ContactScreen.navigationOptions = {
  title: '',
  headerRight: <EditContactButton />,
};

export default ContactScreen;
