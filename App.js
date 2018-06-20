import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Reducers from './src/reducers';
import HomeScreen from './src/components/HomeScreen';
import AuthScreen from './src/components/AuthScreen';
import SetupScreen from './src/components/SetupScreen';
import ScoreScreen from './src/components/ScoreScreen';
import SummaryScreen from './src/components/SummaryScreen.js';

const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Auth: { screen: AuthScreen },
    Setup: { screen: SetupScreen },
    Score: { screen: ScoreScreen },
    Summary: { screen: SummaryScreen }
  },
  { 
    initialRouteName: 'Home',
    navigationOptions: {
      headerTitleStyle: {
        alignSelf: 'center',
        color: '#88ab4b',
        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        fontSize: 30,
      },
      headerTintColor: '#fff',
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0
      }
    }
  }
);

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyD9dZOcmaP3JfrMwmEUdmiDdfcz1erRNkE",
      authDomain: "onpar-f0757.firebaseapp.com",
      databaseURL: "https://onpar-f0757.firebaseio.com",
      projectId: "onpar-f0757",
      storageBucket: "onpar-f0757.appspot.com",
      messagingSenderId: "367006892212"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

export default App;
