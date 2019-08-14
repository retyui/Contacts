// @flow
import React, { useCallback } from 'react';
import { useNavigation } from 'react-navigation-hooks';

import TopBarRightButton from '@/components/TopBarRightButton';
import { CREATE_CONTACT_SCREEN } from '@/features/CreateContactScreen/consts';

const AddContactButton = () => {
  const { navigate } = useNavigation();
  const onPress = useCallback(() => navigate(CREATE_CONTACT_SCREEN), [
    navigate,
  ]);

  return <TopBarRightButton onPress={onPress} title="Add" />;
};

export default AddContactButton;
