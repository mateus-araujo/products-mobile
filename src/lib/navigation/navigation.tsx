import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ProductsListScreen } from 'screens';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductsListScreen">
        <Stack.Screen
          name="ProductsListScreen"
          component={ProductsListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
