import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import screens

import Favorites from '../pages/Favorites';
import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#9381ff',
  style: {
    height: '10%',
  },
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="movie-filter" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="favorite" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
