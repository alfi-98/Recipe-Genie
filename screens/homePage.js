import { View, Text,StyleSheet ,SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const name = "John";
  const question = "What food do you want to eat today?";
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('RecipeGenie');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(16,13,14,1)" }}>
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 20 }}>Hi, {name},</Text>
      <Text style={{ color: "white", fontSize: 15, opacity: 0.4 }}>{question}</Text>
      <TouchableOpacity style={styles.button1} onPress={handlePress}>
      <Text style={styles.text}>Search Recipes</Text>
      <Image
          source={{ uri: '/Users/imac/Documents/alfiDev/fubol/assets/images/next.png' }}
          style={{width: 24, height: 24, marginRight: 10,}}
        />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(16,13,14,1)",
         flex: 1, 
         margin: 16,
         paddingTop: 30,
    },
    button1: {
        justifyContent: 'center',
        width: 250,
        paddingVertical: 12,
        elevation: 3,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: 'rgba(168, 66, 37, 1)',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      text: {
        fontSize: 15,
        color: 'white',
        marginLeft: 10
      },
})

export default HomePage;