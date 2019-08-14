// @flow
import React from 'react';
import { SafeAreaView } from 'react-native';

import SaveContactButton from './SaveContactButton';
import styles from './styles';

const EditContactScreen = () => <SafeAreaView style={styles.root} />;

EditContactScreen.navigationOptions = {
  title: 'Edit contact',
  headerRight: <SaveContactButton />,
};

export default EditContactScreen;
