// @flow
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import SearchInput from '@/components/SearchInput';

import AddContactButton from './AddContactButton';
import styles from './styles';
import UserList from './UserList';
import { useSelector } from '@/redux/hooks';
import { getIndexByFirstLetter } from '@/features/users/selectors';

const ContactsScreen = () => {
  const [value, onChangeText] = useState<string>('');
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
