import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ProductDetailsScreen, ProductsListScreen } from 'screens';

import { NavigationRoutes } from 'lib/types';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationRoutes.PRODUCTS_LIST}>
        <Stack.Screen
          component={ProductsListScreen}
          name={NavigationRoutes.PRODUCTS_LIST}
          options={{ title: 'Products List' }}
        />
        <Stack.Screen
          component={ProductDetailsScreen}
          name={NavigationRoutes.PRODUCT_DETAILS}
          options={{ title: 'Product Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
