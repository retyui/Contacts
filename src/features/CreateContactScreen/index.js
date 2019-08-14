// @flow
import React, { useCallback } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import { createUser } from '@/features/users/actions';
import { useDispatch } from '@/redux/hooks';

import Form from './Form';
import SaveContactButton from './SaveContactButton';
import styles from './styles';

const CreateContactScreen = () => {
  const dispatch = useDispatch();
  const { goBack } = useNavigation();
  const onSubmit = useCallback(
    values => {
      dispatch(createUser(values));
      goBack();
    },
    [dispatch, goBack],
  );

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.scrollRoot}>
        <Form onSubmit={onSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

CreateContactScreen.navigationOptions = {
  title: 'Add new contact',
  headerRight: <SaveContactButton />,
};

export default CreateContactScreen;
