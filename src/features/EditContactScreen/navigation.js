// @flow
import { EDIT_CONTACT_SCREEN } from './consts';
import { USER_ID_PARAM as EDIT_USER_ID_PARAM } from './consts/screenParams';
import EditContactScreen from './index';

export const openEditContactScreen = (navigate, userId: string) =>
  navigate(EDIT_CONTACT_SCREEN, { [EDIT_USER_ID_PARAM]: userId });

export default {
  [EDIT_CONTACT_SCREEN]: { screen: EditContactScreen },
};
