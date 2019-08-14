// @flow
import type { UserAttributes } from '@/features/users/types';

export type Values = UserAttributes;

export type DefaultProps = {|
  initialLastName?: string,
  initialFirstName?: string,
  initialEmailAddress?: string,
  initialPhoneNumber?: string,
|};

export type Props = $ReadOnly<{|
  ...DefaultProps,
  onSubmit: Values => void,
|}>;
