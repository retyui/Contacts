// @flow
import React from 'react';
import { SectionList } from 'react-native';

import SectionHeader from '../SectionHeader';
import UserListItem from '../UserListItem';
import styles from './styles';

type Props = $ReadOnly<{|
  // TODO
  sections: any,
|}>;

const renderItem = ({ item: userId }) => <UserListItem userId={userId} />;
const renderSectionHeader = ({ section: { key } }) => (
  <SectionHeader title={key} />
);
const keyExtractor = userId => userId;

const UserList = ({ sections }: Props) => (
  <SectionList
    style={styles.root}
    renderItem={renderItem}
    renderSectionHeader={renderSectionHeader}
    sections={sections}
    keyExtractor={keyExtractor}
  />
);

export default UserList;
