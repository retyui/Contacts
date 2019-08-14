// @flow
import React, { useCallback } from 'react';
import { Linking } from 'react-native';

import { getUserEmail } from '@/features/users/selectors';
import { useSelector } from '@/redux/hooks';

import Row from '../Row';

type Props = $ReadOnly<{|
  userId: string,
|}>;

const EmailRow = ({ userId }: Props) => {
  const emailAddress = useSelector(getUserEmail, [userId]);
  const onPress = useCallback(() => Linking.openURL(`mailto:${emailAddress}`), [
    emailAddress,
  ]);

  if (emailAddress) {
    return (
      <Row onPress={onPress} label="Phone">
        {emailAddress}
      </Row>
    );
  }

  return null;
};

export default EmailRow;
