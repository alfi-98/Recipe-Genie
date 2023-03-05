import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FeatureCard from '../components/featureCard';
import PopularRecipes from '../components/popularRecipes';
import {ScrollView} from 'react-native-gesture-handler';

const HomePage = () => {
  const name = 'John';
  const question = 'What food do you want to eat today?';
  const navigation = useNavigation();
  const categoryList = ['Breakfast', 'Lunch', 'Dinner'];
  const [activeCategory, setActiveCategory] = useState(0);

  const handleCategoryPress = index => {
    setActiveCategory(index);
  };
  const handlePress = () => {
    navigation.navigate('RecipeGenie');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(246, 246, 246, 1)'}}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.regularText}>☀️ Good Morning</Text>
          <Text>🛒 Cart</Text>
        </View>
        <Text style={{color: '#134f5c', fontSize: 20}}>Hi, {name},</Text>
        <Text style={styles.fadedText}>{question}</Text>
        <TouchableOpacity style={styles.button1} onPress={handlePress}>
          <Text style={styles.text}>Use Our Genie</Text>
          <Image
            source={{
              uri: '/Users/imac/Documents/alfiDev/fubol/assets/images/next.png',
            }}
            style={{width: 24, height: 24, marginRight: 10}}
          />
        </TouchableOpacity>
        <Text style={styles.boldText}>Featured</Text>
        <View style={styles.infoTable}>
          <View style={{padding: 10}}>
            <Image
              source={{
                uri: '/Users/imac/Documents/alfiDev/fubol/assets/images/ramen.png',
              }}
              style={{width: 50, height: 50, borderRadius: 10, marginLeft: 280}}
            />
            <Text style={styles.imageText}>
              Asian white featured noodle with extra seafood
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text style={styles.imageText2}>🙎🏻‍♂️ Name User</Text>
              <Text style={styles.imageText2}>20 min</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 16}}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.boldText}>Category</Text>
          <Text
            style={{
              fontSize: 12,
              color: 'rgba(116, 185, 190, 1)',
              marginTop: 10,
            }}>
            See All
          </Text>
        </View>
        <View style={styles.categoryContainer}>
          {categoryList.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryButton,
                activeCategory === index && {
                  backgroundColor: 'rgba(116, 185, 190, 1)',
                },
              ]}
              onPress={() => handleCategoryPress(index)}>
              <Text
                style={[
                  styles.categoryText,
                  activeCategory === index && {color: '#fff'},
                ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{marginTop: 16}}></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.boldText}>Popular Recipes</Text>
          <Text
            style={{
              fontSize: 12,
              color: 'rgba(116, 185, 190, 1)',
              marginTop: 10,
            }}>
            See All
          </Text>
        </View>
        <ScrollView horizontal={true}>
          <PopularRecipes />
          <PopularRecipes />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(246, 246, 246, 1)',
    flex: 1,
    margin: 16,
  },
  button1: {
    alignItems: 'center',
    width: 250,
    paddingVertical: 12,
    elevation: 3,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: 'rgba(116, 185, 190, 1)',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 15,
    color: 'white',
    marginLeft: 10,
  },
  fav: {
    height: 100,
    backgroundColor: 'rgba(254, 195, 79, 1)',
    borderRadius: 10,
  },
  boldText: {
    fontSize: 16,
    color: '#134f5c',
    fontWeight: 'bold',
    marginTop: 10,
  },
  fadedText: {
    color: '#134f5c',
    fontSize: 15,
    opacity: 0.4,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  regularText: {
    color: '#134f5c',
    fontSize: 12,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryButton: {
    alignItems: 'center',
    backgroundColor: '#rgba(116, 185, 190, 0.2)',
    borderRadius: 20,
    width: 110,
    padding: 10,
    marginTop: 10,
  },
  categoryText: {
    fontSize: 15,
    color: '#134f5c',
  },
  infoTable: {
    width: 357,
    height: 180,
    backgroundColor: 'rgba(116, 185, 190, 1)',
    borderRadius: 10,
    marginTop: 10,
  },
  imageText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 50,
  },
  imageText2: {
    color: 'white',
    fontSize: 12,
    opacity: 0.6,
  },
});

export default HomePage;
