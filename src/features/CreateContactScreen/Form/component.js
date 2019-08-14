// @flow
import type { InjectedFormikProps } from 'formik';
import React, { Fragment, useEffect } from 'react';
import { useNavigation } from 'react-navigation-hooks';

import FormikTextInput from '@/components/FormikTextInput';

import {
  EMAIL_ADDRESS_KEY,
  FIRST_NAME_KEY,
  LAST_NAME_KEY,
  PHONE_NUMBER_KEY,
} from './consts/fields';
import { ON_SUBMIT_HANDLER } from './consts/screenParams';
import FieldRow from './FieldRow';
import styles from './styles';
import type { Props, Values } from './types';

const Form = ({ handleSubmit }: InjectedFormikProps<Props, Values>) => {
  const { setParams } = useNavigation();

  useEffect(() => {
    setParams({
      [ON_SUBMIT_HANDLER]: handleSubmit,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleSubmit]);

  return (
    <Fragment>
      <FieldRow label="First name (required)">
        <FormikTextInput fieldName={FIRST_NAME_KEY} style={styles.input} />
      </FieldRow>
      <FieldRow label="Last name">
        <FormikTextInput fieldName={LAST_NAME_KEY} style={styles.input} />
      </FieldRow>
      <FieldRow label="Phone number (required)">
        <FormikTextInput fieldName={PHONE_NUMBER_KEY} style={styles.input} />
      </FieldRow>
      <FieldRow label="E-mail">
        <FormikTextInput fieldName={EMAIL_ADDRESS_KEY} style={styles.input} />
      </FieldRow>
    </Fragment>
  );
};

export default Form;
