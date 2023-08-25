import React from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {Provider} from "react-redux"
import {createStore, applyMiddleware} from "redux-thunk"
import thunk from "redux-thunk"
import rootReducer from "./src/redux/reducers"


import Constants from "expo-constants"
import firebase from "firebase"
import AuthScreen from "./src/screens/auth";

const store = createStore(rootReducer, applyMiddleware(thunk))

const firebaseConfig = {
  apiKey: "AIzaSyBZxtMMWPrp5A50IhmSfLmln-AVdrqbqdA",
  authDomain: "tiktok-d06ce.firebaseapp.com",
  projectId: "tiktok-d06ce",
  storageBucket: "tiktok-d06ce.appspot.com",
  messagingSenderId: "883089275131",
  appId: "1:883089275131:web:6b32911d28be068c45585e",
  measurementId: "G-1DT0XEPR2T"
}

if(firebase.apps.length == 0){
  firebase.initializeApp(firebaseConfig)
} 

export default function App() {
  return (
    <Provider store = {store}>
      <AuthScreen/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
