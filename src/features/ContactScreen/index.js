// @flow
import React, { useCallback } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import { useDispatch } from 'react-redux';

import TextAvatar from '@/components/TextAvatar';
import { updateUser } from '@/features/users/actions';
import { getUserInitials } from '@/features/users/selectors';
import { useSelector } from '@/redux/hooks';

import { USER_ID_PARAM } from './consts/screenParams';
import EditContactButton from './EditContactButton';
import Form from './Form';
import RemoveButton from './RemoveButton';
import styles, { AVATAR_SIZE } from './styles';

const ContactScreen = () => {
  const dispatch = useDispatch();
  const { goBack } = useNavigation();
  const userId: string = useNavigationParam(USER_ID_PARAM);
  const initials = useSelector(getUserInitials, [userId]);
  const onSubmit = useCallback(
    values => {
      goBack();
      dispatch(updateUser({ ...values, id: userId }));
    },
    [dispatch, goBack, userId],
  );

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <View style={styles.userCard}>
          <TextAvatar style={styles.avatar} size={AVATAR_SIZE}>
            {initials}
          </TextAvatar>
          <Form userId={userId} onSubmit={onSubmit} />
        </View>
        <RemoveButton userId={userId} />
      </ScrollView>
    </SafeAreaView>
  );
};

ContactScreen.navigationOptions = {
  title: '',
  headerRight: <EditContactButton />,
};

export default ContactScreen;
