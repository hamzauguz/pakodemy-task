import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Favorites from './src/pages/Favorites';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
