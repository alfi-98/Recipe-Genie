import React, { useEffect, useState } from 'react';
import { Image, View, Text , TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavouritesPage = () => {
  const navigation = useNavigation();
  const [favourites, setFavourites] = useState([]);

  const getData = async () => {
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      const allData = await AsyncStorage.multiGet(allKeys);
      const parsedData = allData.map(([key, value]) => {
        try {
          return [key, JSON.parse(value)];
        } catch (error) {
          return [key, value];
        }
      });
      console.log('Retrieved data: ', parsedData);
      setFavourites(parsedData);
    } catch (error) {
      console.log('Error retrieving data: ', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    
    <SafeAreaView style={{ flex: 1,  backgroundColor: 'rgba(254, 195, 79, 1)', }}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <Image
          source={{ uri: '/Users/imac/Documents/alfiDev/fubol/assets/images/left-arrow.png' }}
          style={{width: 24, height: 24,marginTop: 10, marginLeft: 16,opacity: 0.6}}
        />
    </TouchableOpacity>
    <View style={styles.container}>
    <View style={{padding: 10}}>
      <Text style={{ color: 'black', fontSize: 20, marginBottom:10}}>Favourite Recipes</Text>
    </View>
      <ScrollView>
        {favourites.map((favourite, index) => (
            <RecipeCard key={index} message={favourite} />
          ))}
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

const RecipeCard = ({message}) => {
    
  return (
      <View style={{borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10, borderRadius: 10,}}>
      <View style={{flexDirection: 'column', width: 350,}}>      
        <Text style={{ color: 'black', fontSize: 15,}}>
          {message}
        </Text>
        <TouchableOpacity onPress={()=>storeFavourites(message.message)}>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      overflow: 'hidden',
      padding: 16
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.3)',
      padding: 10,
    },
    text: {
      color: 'black',
      fontSize: 15,
    },
  });
  export default FavouritesPage