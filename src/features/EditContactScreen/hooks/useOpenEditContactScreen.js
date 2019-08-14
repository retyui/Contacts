// @flow
import { useCallback } from 'react';
import { useNavigation } from 'react-navigation-hooks';

import { openEditContactScreen } from '../navigation';

const useOpenEditContactScreen = (userId: string) => {
  const { navigate } = useNavigation();

  return useCallback(() => openEditContactScreen(navigate, userId), [
    navigate,
    userId,
  ]);
};

export default useOpenEditContactScreen;
