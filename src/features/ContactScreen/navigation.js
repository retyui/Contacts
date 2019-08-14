// @flow
import { CONTACT_SCREEN } from './consts';
import { USER_ID_PARAM } from './consts/screenParams';
import ContactScreen from './index';

export const openContactScreen = (
  navigate: (string, {}) => mixed,
  userId: string,
) => navigate(CONTACT_SCREEN, { [USER_ID_PARAM]: userId });

export default {
  [CONTACT_SCREEN]: { screen: ContactScreen },
};
