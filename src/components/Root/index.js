// @flow
import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { CONTACTS_SCREEN } from '@/features/ContactsScreen/consts';
import { persistor, store } from '@/redux';

import routes from './routes';

const RootStack = createStackNavigator(
  // $FlowFixMe
  routes,
  { initialRouteName: CONTACTS_SCREEN },
);

const App = createAppContainer(RootStack);

const Root = (props: {}) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App {...props} />
    </PersistGate>
  </Provider>
);

export default Root;
