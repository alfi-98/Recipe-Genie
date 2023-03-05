import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/homePage';
import RecipeGenie from '../screens/recipeGenie';
import FavouritesPage from '../screens/favouritesPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image} from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'rgba(116, 185, 190, 1)',
        tabBarInactiveTintColor: 'rgba(116, 185, 190, 0.5)',
        tabBarStyle: [
          {
            display: 'flex'
          },
          null
        ]
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('/Users/imac/Documents/alfiDev/Recipe-Genie/assets/images/home.png')}
              style={{ width: size, height: size}}
            />
          )
        }}
      />
      <Tab.Screen
        name="RecipeGenie"
        component={RecipeGenie}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('/Users/imac/Documents/alfiDev/Recipe-Genie/assets/images/bot.png')}
              style={{ width: size, height: size}}
            />
          )
        }}
      />
      <Tab.Screen
        name="FavouritesPage"
        component={FavouritesPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('/Users/imac/Documents/alfiDev/Recipe-Genie/assets/images/fav.png')}
              style={{ width: size, height: size}}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
