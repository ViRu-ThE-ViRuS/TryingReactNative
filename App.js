import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './components/HomeScreen/HomeScreen'
import ProfileScreen from './components/ProfileScreen/ProfileScreen'

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
});

export default App;