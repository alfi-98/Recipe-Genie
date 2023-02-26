import React, { useEffect, useState } from 'react';
import { View, Text , TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';

const API_KEY = 'skStsmenBa4IZoojPbOiacT3BlbkFJmwr9rdQPuGVCuePcEULO';
const API_URL = `https://api.openai.com/v1/completions`;

const App = () => {
  const [input, setInput] = useState("")
  const [chatLog, setChatLog] = useState([])

  function clearChat(){
    setChatLog([]);
  }


  async function handleSubmit(){
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
    
    <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(168, 66, 37, 1)' }}>
    <View style={styles.container}>
    <View style={{padding: 10}}>
      <Text style={{ color: 'white', fontSize: 20, opacity: 0.4, marginBottom:10}}>Food Recipe Suggestion</Text>
    </View>
      <TextInput 
      style={{borderWidth: 1, width: 280, height: 30, marginBottom: 10, borderRadius: 5, borderColor: "#d5d5d5"}}
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
      <ScrollView>
      {chatLog.map((message, index) => (
        <ChatMessage key={index} message={message}/>
      ))}
      </ScrollView>
    
    </View>
    </SafeAreaView>
  );
};

const ChatMessage = ({message}) => {
  return (
    <View style={{borderWidth: 1, borderColor: 'white', padding: 10, marginBottom: 10, borderRadius: 10}}>
      <View style={{flexDirection: 'column', width: 350,}}>
      <Text style={{ color: 'white', fontSize: 20, opacity: 0.4, marginBottom:10}}>
          {message.user}
        </Text>        
        <Text style={{ color: 'white', fontSize: 15,}}>
          {message.message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(168, 66, 37, 1)',
  },
  button1: {
    
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    paddingVertical: 12,
    elevation: 3,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'white',
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
    marginRight: 10,
    backgroundColor: 'white',
    borderTopRightRadius: 10, 
    borderBottomRightRadius: 10, 
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(168, 66, 37, 1)'
  }})

  export default App