import React, { Component } from 'react';
import Title from './Title';
import Container from './Container';

class AuthScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '', username: '', password: '' };
  }

  static navigationOptions = {
    title: 'Sign In',
    headerStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#88ab4b',
      textShadowColor: 'black',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
      fontSize: 30
    }
  }

  render() {
    return (
      <Container>
        <Title>AUTHENTICATION</Title>
      </Container>
    );
  }
}

export default AuthScreen;
