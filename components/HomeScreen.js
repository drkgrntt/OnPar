import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import Button from './Button';
import Container from './Container';
import Title from './Title';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0
    },
    headerTitleStyle: {
      alignSelf: 'center',
      color: '#88ab4b',
      textShadowColor: 'black',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
      fontSize: 30,
    }
  }

  render() {
    return (
      <Container>
        <Title>On Par</Title>
        <Text style={styles.text}>Your mobile disc golf scorecard</Text>
        <Button onPress={() => this.props.navigation.navigate('Setup')}>
          Multiplayer quick start
        </Button>
        <Button onPress={() => this.props.navigation.navigate('QuickScore')}>
          Quick Start
        </Button>
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

export default HomeScreen;
