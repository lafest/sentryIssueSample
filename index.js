/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as Sentry from '@sentry/react-native';

if (!__DEV__) {
  Sentry.init({
    dsn: 'https://f2942cfb5c3d40fd8bdebfe463315e10@o4504353722925056.ingest.sentry.io/4504353725022208',
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
    dist: '2',
    release: '2',
  });
}

AppRegistry.registerComponent(appName, () => App);
