import { View, Text,StyleSheet } from 'react-native';
import React from 'react';

const HomePage = () => {
  const name = "John";
  const question = "What food do you want to eat today?";
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 20 }}>Hi, {name},</Text>
      <Text style={{ color: "white", fontSize: 15, opacity: 0.4 }}>{question}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(16,13,14,1)",
         flex: 1, 
         justifyContent: "center",  
         padding: 16,
    }
})

export default HomePage;