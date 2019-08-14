// @flow
import React from 'react';
import { View } from 'react-native';

import FormikTextInput from '@/components/FormikTextInput';

import InputRow from '../InputRow';

import styles from './styles';

const Form = () => {
  return (
    <View style={styles.root}>
      <InputRow label="First name">
        <FormikTextInput placeholder="First name" />
      </InputRow>
      <InputRow label="Last name">
        <FormikTextInput placeholder="Last name" />
      </InputRow>
      <InputRow label="Phone">
        <FormikTextInput placeholder="Phone" />
      </InputRow>
      <InputRow label="E-mail">
        <FormikTextInput placeholder="E-mail" />
      </InputRow>
    </View>
  );
};

export default Form;
