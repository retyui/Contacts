// @flow
import React, { type ElementConfig } from 'react';

import Form from '@/features/CreateContactScreen/Form';
import {
  getUserEmail,
  getUserFirstName,
  getUserLastName,
  getUserPhoneNumber,
} from '@/features/users/selectors';
import { useSelector } from '@/redux/hooks';

type Props = $ReadOnly<{|
  ...$Exact<ElementConfig<typeof Form>>,
  userId: string,
|}>;
const EditForm = ({ userId, ...props }: Props) => {
  const initialLastName = useSelector(getUserLastName, [userId]);
  const initialFirstName = useSelector(getUserFirstName, [userId]);
  const initialEmailAddress = useSelector(getUserEmail, [userId]);
  const initialPhoneNumber = useSelector(getUserPhoneNumber, [userId]);

  return (
    <Form
      {...props}
      initialLastName={initialLastName}
      initialFirstName={initialFirstName}
      initialEmailAddress={initialEmailAddress}
      initialPhoneNumber={initialPhoneNumber}
    />
  );
};

export default EditForm;
