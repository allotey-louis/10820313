import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, Image , View} from 'react-native';
import image from './assets/image.jpg'
import google from './assets/google.png'


export default function App() {

 
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
        <View style={styles.loginBox} blurRadius={1} >
            <View>
                <Text> Name</Text>
                <TextInput style={styles.input} placeholder="name" />
            </View>
            <View>
                <Text> Student ID </Text>
                <TextInput style={styles.input} placeholder="Student ID" />
            </View>
            <View>
                <Text> Pin </Text>
                <TextInput style={styles.input} placeholder="Pin" />
            </View>
            <View>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.btnText} >
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.withGoogle} >
                <Image source={require('./assets/google.png')} style={styles.google} />
                <Text> Continue with Student Mail </Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 10,
      justifyContent:'flex-end',
  },
  loginBox: {
      width: `100%`,
      backgroundColor: 'whitesmoke',
      opacity: 0.8,
      padding: 20,
      borderRadius: 20,
    //   borderTopRightRadius: 20,
    //   borderTopLeftRadius: 20,
    
  },
  profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#0398fc',
      justifyContent: 'center',
      alignItems: 'center',
  },
  label: {


  },
  input: {
      width: '100%',
      height: 50,
      borderRadius: 10,
      backgroundColor: 'whitesmoke',
      borderWidth: 2,
      borderColor: 'blue',
      paddingLeft: 10,
      paddingRight: 10,
    //   opacity: 0.9
  },
  button: {
      width:'100%',
      height: 50,
      borderRadius: 10,
      backgroundColor: '#0398fc',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 20,
  },
  btnText: {
      fontSize: 18,
  },
  withGoogle: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  google:{
      width: 30,
      height: 30,
      marginRight: 20,
  }
  
})
