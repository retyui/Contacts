// @flow
import { openAlertAsync } from '@/utils/alert';

export const askRemove = () =>
  openAlertAsync('', 'Delete this contact?', {
    ok: {
      text: 'Delete',
    },
    cancel: {
      text: 'Cancel',
      style: 'cancel',
    },
  });
