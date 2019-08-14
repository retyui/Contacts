// @flow
import React from 'react';
import { useNavigation } from 'react-navigation-hooks';

import TopBarRightButton from '@/components/TopBarRightButton';
import { ON_SUBMIT_HANDLER } from '@/features/CreateContactScreen/Form/consts/screenParams';

const SaveContactButton = () => {
  const { getParam } = useNavigation();
  const onPress = getParam(ON_SUBMIT_HANDLER);

  return <TopBarRightButton title="Save" onPress={onPress} />;
};

export default SaveContactButton;
