// @flow
import ContactScreen from '@/features/ContactScreen/navigation';
import ContactsScreen from '@/features/ContactsScreen/navigation';
import CreateContactScreen from '@/features/CreateContactScreen/navigation';
import EditContactScreen from '@/features/EditContactScreen/navigation';

export default {
  ...ContactScreen,
  ...ContactsScreen,
  ...CreateContactScreen,
  ...EditContactScreen,
};
