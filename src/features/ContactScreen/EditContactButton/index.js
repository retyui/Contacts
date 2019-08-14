// @flow
import React from 'react';
import { useNavigationParam } from 'react-navigation-hooks';

import TopBarRightButton from '@/components/TopBarRightButton';
import useOpenEditContactScreen from '@/features/EditContactScreen/hooks/useOpenEditContactScreen';

import { USER_ID_PARAM } from '../consts/screenParams';

const EditContactButton = () => {
  const userId: string = useNavigationParam(USER_ID_PARAM);
  const onPress = useOpenEditContactScreen(userId);

  return <TopBarRightButton onPress={onPress} title="Edit" />;
};

export default EditContactButton;
