// @flow
import { compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export default () => {
  const store = createStore(
    persistReducer(persistConfig, rootReducer),
    composeEnhancers(),
  );
  const persistor = persistStore(store);

  return { store, persistor };
};
