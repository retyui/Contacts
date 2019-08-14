// @flow
import { useField, useFormikContext } from 'formik';
import React, {
  type ComponentType,
  type ElementConfig,
  Fragment,
  useCallback,
} from 'react';
import { TextInput } from 'react-native';

import FieldErrorMessage from '@/components/FieldErrorMessage';

type Props = $ReadOnly<{|
  ...$Exact<$Diff<ElementConfig<typeof TextInput>, { value: any }>>,
  ErrorComponent?: ComponentType<{| +error: ?string |}>,
  fieldName: string,
|}>;

const FormikTextInput = ({
  ErrorComponent = FieldErrorMessage,
  fieldName,
  onBlur,
  onChangeText,
  ...props
}: Props) => {
  const [{ value }, { touched, error }] = useField(fieldName);
  const { setFieldTouched, setFieldValue } = useFormikContext();
  const onBlurHandler = useCallback(
    event => {
      setFieldTouched(fieldName, true);

      if (onBlur) {
        onBlur(event);
      }
    },
    [setFieldTouched, fieldName, onBlur],
  );
  const onChangeTextHandler = useCallback(
    (val: string) => {
      setFieldValue(fieldName, val);

      if (onChangeText) {
        onChangeText(value);
      }
    },
    [setFieldValue, fieldName, onChangeText, value],
  );

  const hasError = Boolean(touched && error);

  return (
    <Fragment>
      <TextInput
        {...props}
        value={value}
        onChangeText={onChangeTextHandler}
        onBlur={onBlurHandler}
      />
      <ErrorComponent error={hasError ? error : null} />
    </Fragment>
  );
};

export default FormikTextInput;
