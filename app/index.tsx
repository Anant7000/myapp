import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { app } from './firebase.js'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';





export default function index() {


  // const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId: "229784448664-au27uvm0jjmkna7h6h58864aushn6jsq.apps.googleusercontent.com",
      androidClientId: "229784448664-lgmkiugs1ogf5ca7368ngc3a7k5sg5of.apps.googleusercontent.com"
    });
  };
  useEffect(() => {
    configureGoogleSignIn();
  }, [])

  const signIn = async () => {
    try {
      const userInfo = await GoogleSignin.hasPlayServices();
      console.log(userInfo);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View>
      <GoogleSigninButton onPress={signIn} ></GoogleSigninButton>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',

    width: 400,
    height: 100,
    justifyContent: 'center',
    backgroundColor: '#4285F4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})