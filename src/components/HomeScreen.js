import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Button from './Button';
import Container from './Container';
import Title from './Title';
import * as actions from '../actions';

class HomeScreen extends React.Component {
  static navigationOptions = {
    // title: 'Home',
    //   headerTitleStyle: {
    //     alignSelf: 'center',
    //     color: '#88ab4b',
    //     textShadowColor: 'black',
    //     textShadowOffset: { width: 1, height: 1 },
    //     textShadowRadius: 5,
    //     fontSize: 30,
    //   },
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

  render() {
    const { resetScoreState, addPlayer, navigation } = this.props;
    return (
      <Container>
        <Title>On Par</Title>
        <Text style={styles.text}>Your mobile disc golf scorecard</Text>
        <Button onPress={() => {
          resetScoreState();
          addPlayer('You');
          navigation.navigate('QuickScore');
        }}>
          Quick Start
        </Button>
        <Button onPress={() => {
          resetScoreState();
          navigation.navigate('Setup');
        }}>
          Multiplayer Quick Start
        </Button>
        {/* <Button onPress={() => this.props.navigation.navigate('Auth')}>
          Sign In
        </Button> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic'
  }
})

export default connect(null, actions)(HomeScreen);
