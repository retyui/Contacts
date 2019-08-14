// @flow
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import SearchInput from '@/components/SearchInput';
import { getIndexByFirstLetter } from '@/features/users/selectors';
import { useSelector } from '@/redux/hooks';

import AddContactButton from './AddContactButton';
import styles from './styles';
import UserList from './UserList';

const ContactsScreen = () => {
  const [value, onChangeText] = useState('');
  const sections = useSelector(getIndexByFirstLetter, [value]);

  return (
    <SafeAreaView style={styles.root}>
      <SearchInput onChangeText={onChangeText} value={value} />
      <UserList sections={sections} />
    </SafeAreaView>
  );
};

ContactsScreen.navigationOptions = {
  title: 'Contacts',
  headerRight: <AddContactButton />,
};

export default ContactsScreen;
