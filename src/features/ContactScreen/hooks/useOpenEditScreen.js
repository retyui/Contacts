// @flow
import { useCallback } from 'react';
import { useNavigation } from 'react-navigation-hooks';

import { openContactScreen } from '../navigation';

const useOpenContactScreen = (userId: string) => {
  const { navigate } = useNavigation();

  return useCallback(() => openContactScreen(navigate, userId), [
    navigate,
    userId,
  ]);
};

export default useOpenContactScreen;
