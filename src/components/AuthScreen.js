import React, { Component } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import Title from './Title';
import Container from './Container';

class AuthScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '', email: '', password: '' };
  }

  static navigationOptions = {
    title: 'Login'
  }

  render() {
    return (
      <Container>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    color: '#f00',
    fontSize: 20,
    fontStyle: 'italic'
  },
  text: {
    color: '#fff',
    fontSize: 25
  },
  input: {
    height: 40,
    width: 300,
    borderColor: '#222',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 5,
    paddingLeft: 15,
    margin: 8
  }
});

export default AuthScreen;
