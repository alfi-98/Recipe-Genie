import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const PopularRecipes = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: '/Users/imac/Documents/alfiDev/fubol/assets/images/food1.jpeg',
        }}
        style={{
          width: 170,
          height: 100,
          marginRight: 10,
          borderRadius: 10,
          margin: 10,
        }}
      />
      <View>
        <Text style={styles.boldText}>
          Healthy Taco Salad with fresh veggies
        </Text>
        <Text style={styles.Text}>120 kCal . 20 min</Text>
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    width: 200,
    height: 180,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  boldText: {
    fontSize: 12,
    color: '#134f5c',
    fontWeight: 'bold',
    marginTop: 5,
    maxWidth: 150,
  },
  Text: {
    opacity: 0.3,
    fontSize: 12,
    marginTop: 5,
    justifyContent: 'space-between',
  },
});

export default PopularRecipes;
