// @flow
import React from 'react';
import { SafeAreaView } from 'react-native';

import SaveContactButton from './SaveContactButton';
import styles from './styles';

//import Form from './Form';

const CreateContactScreen = () => <SafeAreaView style={styles.root} />;

CreateContactScreen.navigationOptions = {
  title: 'Add new contact',
  headerRight: <SaveContactButton />,
};

export default CreateContactScreen;
