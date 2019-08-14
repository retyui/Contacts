// @flow
import { TextInput } from 'react-native';
import { useField, useFormik } from 'formik';
import React, { Fragment, type ElementConfig } from 'react';

type Props = $Diff<
  ElementConfig<typeof TextInput>,
  {
    name: any,
    error: any,
    // Provided from fieldProps
    value: any,
    onChange: any,
    onBlur: any,
  },
>;

const FormikTextInput = ({ name, ...props }: Props) => {
  const formik = useFormik();

  console.log(' --- formik', formik);
  const [fieldProps, { touched, error }] = useField(name);
  const hasError = Boolean(touched && error);

  return (
    <Fragment>
      <TextInput {...props} />
    </Fragment>
  );
};

export default FormikTextInput;
