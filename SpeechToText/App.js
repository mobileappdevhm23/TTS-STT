import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, Button} from 'react-native';
import Voice from '@react-native-voice/voice';

const SpeechToText = () => {
  const [result, setResult] = useState('');
  const [isListening, setListening] = useState(false);

  const speechEndHandler = () => {
    setListening(false);
  };

  const speechResultsHandler = e => {
    const text = e.value[0];
    setResult(text);
  };

  const startRecording = () => {
    setListening(true);
    Voice.start('de-DE','en-Us')
      .then(() => {
        console.log('Voice recording started');
      })
      .catch(error => {
        console.log('Voice recording error:', error);
      });
  };
  
  const stopRecording = () => {
    setListening(false);
    Voice.stop()
      .then(() => {
        console.log('Voice recording stopped');
      })
      .catch(error => {
        console.log('Voice recording error:', error);
      });
  };  

  const clear = () => {
    setResult('');
  };

  useEffect(() => {
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultsHandler;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.headingText}>Speech To Text</Text>
          <View style={styles.textInputStyle}>
            <TextInput value={result} multiline={true} placeholder="Press start and say something!" style={{ flex: 1, height: '100%'}} onChangeText={text => setResult(text)} editable={false}/>
          </View>
          <View style={styles.container2}>
            <Button title="Start"onPress={startRecording} disabled={isListening} />
            <Button title="Stop"onPress={stopRecording} />
            <Button title="Clear"onPress={clear}/>
          </View>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headingText: {
      alignSelf: 'center',
      marginVertical: 26,
      fontWeight: 'bold',
      fontSize: 26,
      color: '#307CF6',
    },
    textInputStyle: {
      backgroundColor: 'white',
      height: 150,
      width: '80%',
      borderRadius: 15,
      paddingVertical: 16,
      paddingHorizontal: 16,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 5,
      shadowColor: '#307CF6',
      elevation: 2,
      shadowOpacity: 0.4,
      color: '#000',
    },
    speak: {
      display: 'flex',
      padding: 8,
      borderRadius: 8,
      marginLeft: 35,
      paddingLeft: 12,
      paddingRight: 12,
    },
    stop: {
      backgroundColor: '#677E96',
      display: 'flex',
      padding: 8,
      borderRadius: 8,
      paddingLeft: 12,
      paddingRight: 12,
    },
    clear: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'transparent',
      marginRight: 30,
    },
    container2: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 24,
      paddingLeft: 60,
      paddingRight: 60,
    },
    safeArea: {
      padding: 24,
    },
  });

export default SpeechToText;