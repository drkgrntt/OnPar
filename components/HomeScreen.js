import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import Button from './Button';
import Container from './Container';
import Title from './Title';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#69a573'
    },
    headerTitleStyle: {
      color: '#88ab4b',
      shadowColor: 'black',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 1,
      fontSize: 30
    }
  }

  render() {
    return (
      <Container>
        <Image 
          style={{ width: 200, height: 290 }}
          source={{ uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/301023-200.png' }}
        />
        <Title>- OnPar -</Title>
        <Text style={styles.text}>Your mobile disc golf scorecard</Text>
        <Button onPress={() => this.props.navigation.navigate('Setup')}>
          Set up your game
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
