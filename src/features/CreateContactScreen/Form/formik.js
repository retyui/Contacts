// @flow
import { withFormik } from 'formik';
import { object, string } from 'yup';

import {
  PHONE_NUMBER_KEY,
  LAST_NAME_KEY,
  EMAIL_ADDRESS_KEY,
  FIRST_NAME_KEY,
} from './fields';
import type {  , Values } from './types';

export default withFormik<Props, Values>({
  mapPropsToValues: ({
    initialLastName = '',
    initialFirstName = '',
    initialEmailAddress = '',
    initialPhoneNumber = '',
  }) => ({
    [PHONE_NUMBER_KEY]: initialPhoneNumber,
    [FIRST_NAME_KEY]: initialFirstName,
    [LAST_NAME_KEY]: initialLastName,
    [EMAIL_ADDRESS_KEY]: initialEmailAddress,
  }),
  validationSchema: object().shape({
    [PHONE_NUMBER_KEY]: string().required('Phone is a required field'),
    [FIRST_NAME_KEY]: string().required('First name is a required field'),
    [LAST_NAME_KEY]: string(),
    [EMAIL_ADDRESS_KEY]: string(),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values);
    setSubmitting(false);
  },
});
