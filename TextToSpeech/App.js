import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

const TextToSpeech = () => {
  const [text, setText] = useState('');

  const speak = () => {
    options = {
      voice: "com.apple.ttsbundle.Anna-compact",
      //voice: "com.apple.ttsbundle.Daniel-compact"
      //voice: "com.apple.ttsbundle.Amelie-compact"
    }
    Speech.speak(text, options);
  };

  const clear = () => {
    setText('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Text To Speech</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} onChangeText={setText} value={text} placeholder="Enter text to speak"/>
        <View style={styles.buttonContainer}>
          <Button title="Speak" onPress={speak} />
          <Button title="Clear" onPress={clear} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    marginVertical: 26,
    fontWeight: 'bold',
    fontSize: 26,
    color: '#307CF6',
  },
  inputContainer: {
    alignItems: 'center',
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 16,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    shadowColor: '#307CF6',
    elevation: 2,
    shadowOpacity: 0.4,
    color: '#000',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});
export default TextToSpeech;