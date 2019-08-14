// @flow
import React from 'react';
import { SectionList } from 'react-native';

import SectionHeader from '../SectionHeader';
import UserListItem from '../UserListItem';
import { ITEM_HEIGHT } from '../UserListItem/styles';
import styles from './styles';

type Props = $ReadOnly<{| sections: Array<any> |}>;

const keyExtractor = userId => userId;
const renderItem = ({ item: userId }) => <UserListItem userId={userId} />;
const renderSectionHeader = ({ section: { key } }) => (
  <SectionHeader title={key} />
);
const getItemLayout = (_, index) => ({
  length: ITEM_HEIGHT,
  offset: ITEM_HEIGHT * index,
  index,
});

const UserList = (props: Props) => (
  <SectionList
    {...props}
    style={styles.root}
    renderItem={renderItem}
    renderSectionHeader={renderSectionHeader}
    keyExtractor={keyExtractor}
    getItemLayout={getItemLayout}
  />
);

export default UserList;
