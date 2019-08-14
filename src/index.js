// @flow
import './bootstrap';

import { AppRegistry } from 'react-native';

import { name as appName } from '../app.json';
import Root from './components/Root';

AppRegistry.registerComponent(appName, () => Root);
