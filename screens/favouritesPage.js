import React, { useEffect, useState, useRef } from 'react';
import { Image, View, Text , TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RBSheet from "react-native-raw-bottom-sheet";

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

    <SafeAreaView style={{ flex: 1,  backgroundColor: 'rgba(246, 246, 246, 1)' }}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <Image
          source={{ uri: '/Users/imac/Documents/alfiDev/Recipe-Genie/assets/images/left-arrow.png' }}
          style={{width: 24, height: 24,marginTop: 10, marginLeft: 16,opacity: 0.6}}
        />
    </TouchableOpacity>
    <View style={styles.container}>
    <View style={{padding: 10}}>
      <Text style={{ color: '#0c343d', fontSize: 20, marginBottom:10}}>Favourite Recipes</Text>
    </View>
      <ScrollView>
        {favourites.map((favourite, index) => (
            <RecipeCard key={index} message={favourite[1]} itemKey={favourite[0]}/>
          ))}
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

const RecipeCard = ({message, itemKey}) => {
    const messageLines = message.split('\n');
    const title = messageLines[2];
    const [foodVal, setFoodVal] = useState("");
    const [loading, setLoading] = useState(false);
    const bottomSheetRef = useRef();

    async function handleSubmit(message){
        bottomSheetRef.current.open()
        setLoading(true);
        console.log("data: ",message)
        const response = await fetch("http://localhost:3080/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: "Only Calculate the food value of the below recipe, no need to write the incomplete instructions \n" + message
          })
        });
        const data = await response.json();
        setFoodVal(data)
        setLoading(false)
      }
      const BottomSheetContent = () => (
        <View style={{ padding: 16 }}>
          {loading ? <ActivityIndicator color={'rgba(116, 185, 190, 1)'}/> : 
          <View>
          <Text style={{color: 'rgba(116, 185, 190, 1)', fontSize: 20}}>
              Nutritional Values
          </Text>
          <Text>{foodVal.message}</Text></View>}
        </View>
      );
      useEffect(() => {
        console.log("test",foodVal.message)
      }, [foodVal]);

      const handleDelete = (itemKey) => {
        AsyncStorage.removeItem(itemKey);
      }

  return (
      <View style={{ borderWidth: 0.5, borderColor: 'rgba(246, 246, 246, 1)', padding: 10, marginBottom: 10, borderRadius: 10,  backgroundColor: 'rgba(116, 185, 190, 1)'}}> 
      <View style={{flexDirection: 'column', width: 350, }}>      
        <Text style={{ color: 'white', fontSize: 20, }}>
        {title}
        </Text>
        <Text style={{ color: '#0c343d', fontSize: 15, opacity: 1, }}>
        {message}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 8, marginTop: 10}}>
        <TouchableOpacity style={styles.foodValueButton} onPress={()=> handleSubmit(message)}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5}}> 
        <Image
          source={{ uri: '/Users/imac/Documents/alfiDev/Recipe-Genie/assets/images/calories.png' }}
          style={{width: 20, height: 20,opacity: 0.6,}}
        />
        <Text style={{padding: 5,color: 'white' }}>
            Food Value 
        </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.foodValueButton} onPress={handleDelete(itemKey)}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5}}> 
        <Image
          source={{ uri: '/Users/imac/Documents/alfiDev/Recipe-Genie/assets/images/cross-circle.png' }}
          style={{width: 20, height: 20,opacity: 0.6}}
        />
        <Text style={{padding: 5,color: 'white' }}>
            Remove 
        </Text>
        </View>
        </TouchableOpacity>
        </View>
       
      </View>
      <RBSheet ref={bottomSheetRef} height={200} openDuration={250} closeOnDragDown>
        <BottomSheetContent />
    </RBSheet>

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
    foodValueButton: {
        backgroundColor: 'rgba(116, 185, 190, 1)',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#0c343d',
        marginRight: 5,
        borderWidth: 1
    }

  });
  export default FavouritesPage