import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/homePage';
import RecipeGenie from '../screens/recipeGenie';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen  options={{ headerShown: false }} name="Home" component={HomePage} />
      <Stack.Screen   options={{ headerShown: false }} name="RecipeGenie" component={RecipeGenie} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
