import {LogBox} from 'react-native';
import React from 'react';

import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  LogBox.ignoreLogs(['Remote debugger']);

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
