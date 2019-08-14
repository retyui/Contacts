// @flow
import { withFormik } from 'formik';
import { object, string } from 'yup';

import {
  EMAIL_ADDRESS_KEY,
  FIRST_NAME_KEY,
  LAST_NAME_KEY,
  PHONE_NUMBER_KEY,
} from './consts/fields';
import type { Props, Values } from './types';

export default withFormik<Props, Values>({
  mapPropsToValues: ({
    initialLastName = null,
    initialFirstName = '',
    initialEmailAddress = null,
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
    [LAST_NAME_KEY]: string().nullable(),
    [EMAIL_ADDRESS_KEY]: string()
      .email('Please enter a valid email address')
      .nullable(),
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values);

    setSubmitting(false);
  },
});
