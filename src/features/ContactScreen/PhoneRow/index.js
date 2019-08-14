// @flow
import React, { useCallback } from 'react';
import { Linking } from 'react-native';

import { getUserPhoneNumber } from '@/features/users/selectors';
import { useSelector } from '@/redux/hooks';

import Row from '../Row';

type Props = $ReadOnly<{|
  userId: string,
|}>;

const PhoneRow = ({ userId }: Props) => {
  const phoneNumber = useSelector(getUserPhoneNumber, [userId]);
  const onPress = useCallback(() => Linking.openURL(`tel:${phoneNumber}`), [
    phoneNumber,
  ]);

  return (
    <Row onPress={onPress} label="Phone">
      {phoneNumber}
    </Row>
  );
};

export default PhoneRow;
