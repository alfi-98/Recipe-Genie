import React, { useEffect, useState } from 'react';
import { Image, View, Text , TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecipeGenie = () => {
  const [input, setInput] = useState("")
  const [chatLog, setChatLog] = useState([])
  const navigation = useNavigation();

  function clearChat(){
    setChatLog([]);
  }

  async function handleSubmit(){
    console.log(process.env.OPENAI_API_KEY)
    let chatLogNew = [...chatLog, {user: "me", message: `${input}`}]
    console.log(chatLog)
    setInput("")
    setChatLog(chatLogNew)
    const response = await fetch("http://localhost:3080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: chatLogNew.map((message) => message.message).join("\n")
      })
    });
    const data = await response.json();
    setChatLog([...chatLogNew, {user: "gpt", message: `${data.message}`}])
  }
  const handleInputChange = (value) => {
    console.log("sent value: ", value)
    setInput(value);
  };

  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(246, 246, 246, 1)' }}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <Image
          source={{ uri: '/Users/imac/Documents/alfiDev/fubol/assets/images/left-arrow.png' }}
          style={{width: 24, height: 24,marginTop: 10, marginLeft: 16,opacity: 0.6}}
        />
    </TouchableOpacity>
    <View style={styles.container}>
    <View style={{padding: 10}}>
      <Text style={{ color: '#0c343d', fontSize: 20, opacity: 1, marginBottom:10}}>Food Recipe Suggestion</Text>
    </View>
    <ScrollView>
      {chatLog.map((message, index) => (
        <ChatMessage key={index} message={message}/>
      ))}
      </ScrollView>
      <View style={{alignItems: 'center', }}>
      <TextInput 
      style={{color:'#0c343d',borderWidth: 1, width: 280, height: 30, marginBottom: 10, borderRadius: 5, borderColor: "#0c343d"}}
        value={input}
        onChangeText={handleInputChange}
        placeholder=" Write Something.."
        placeholderTextColor="rgba(255, 255, 255, 0.2)"
      />
      <View style={{flexDirection: 'row', }}>
      <TouchableOpacity style={styles.button1} onPress={handleSubmit}>
      <Text style={styles.text}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={clearChat}>
        <Text style={styles.text}>Clear Chat </Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

const ChatMessage = ({message}) => {
    const storeFavourites = async (value) => {
        try {
          const key = Math.random().toString(36).substr(2, 9);
          await AsyncStorage.setItem(key, value);
          console.log('Data successfully saved with key: ', key);
        } catch (error) {
          console.log('Error saving data: ', error);
        }
      };
  return (
    (message.user === "me" ? (
      <View style={{alignItems: 'flex-start'}}>
      <View style={{borderWidth: 1, borderColor: '#0c343d', padding: 10, marginBottom: 10, borderRadius: 10, maxWidth: 250}}>
      <View style={{flexDirection: 'column', }}>
      <Text style={{ color: '#0c343d', fontSize: 20, opacity: 0.4, marginBottom:10}}>
          {message.user}
        </Text>        
        <Text style={{ color: '#0c343d', fontSize: 15,}}>
          {message.message}
        </Text>
      </View>
    </View>
    </View>
    ): (
      <View style={{alignItems: 'flex-end'}}>
      <View style={{borderWidth: 1, borderColor: 'white', padding: 10, marginBottom: 10, borderRadius: 10,  backgroundColor: '#0c343d',  maxWidth: 250}}>
      <View style={{flexDirection: 'column'}}>
      <Text style={{ color: 'white', fontSize: 20, opacity: 0.4, marginBottom:10}}>
          genie
        </Text>        
        <Text style={{ color: 'white', fontSize: 15,}}>
          {message.message}
        </Text>
        <TouchableOpacity onPress={()=>storeFavourites(message.message)}>
        <View style={{ flexDirection: 'row', alignItems: 'center' , justifyContent: 'flex-end', marginTop: 10}}>
        <Image
          source={{ uri: '/Users/imac/Documents/alfiDev/fubol/assets/images/heart.png' }}
          style={{width: 24, height: 24, marginRight: 10,}}
        />
      </View>
        </TouchableOpacity>
      </View>
    </View>
    </View>
    ))
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'rgba(246, 246, 246, 1)',
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    paddingVertical: 12,
    elevation: 3,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'rgba(116, 185, 190, 1)',
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10, 
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: 130,
    elevation: 3,
    marginBottom: 10,
    backgroundColor: 'white',
    borderTopRightRadius: 10, 
    borderBottomRightRadius: 10, 
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0c343d'
  },
})

  export default RecipeGenie