import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/homePage';
import RecipeGenie from '../screens/recipeGenie';
import FavouritesPage from '../screens/favouritesPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
            activeTintColor: 'rgba(116, 185, 190, 1)',
            inactiveTintColor: 'rgba(116, 185, 190, 0.5)',
      }}   
      >
      <Tab.Screen  options={{ headerShown: false }} name="Home" component={HomePage} />
      <Tab.Screen   options={{ headerShown: false }} name="RecipeGenie" component={RecipeGenie} />
      <Tab.Screen   options={{ headerShown: false }} name="FavouritesPage" component={FavouritesPage}/>
    </Tab.Navigator>
  );
};

export default AppNavigator;
