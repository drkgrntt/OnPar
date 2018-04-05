import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import SetupScreen from './components/SetupScreen';
import QuickScoreScreen from './components/QuickScoreScreen';
import ScoreScreen from './components/ScoreScreen';

const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Setup: { screen: SetupScreen },
    QuickScore: { screen: QuickScoreScreen },
    Score: { screen: ScoreScreen }
  },
  { 
    initialRouteName: 'Home'
  }
);


class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default App;
