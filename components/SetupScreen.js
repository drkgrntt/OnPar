import React from 'react';
import _ from 'lodash';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Button from './Button';
import Container from './Container';
import Title from './Title';

class SetupScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: '', text: '', players: [] }
  }

  static navigationOptions = {
    title: 'Setup',
    headerStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0
    },
    headerTitleStyle: {
      color: '#88ab4b',
      textShadowColor: 'black',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
      fontSize: 30
    }
  }

  addPlayer() {
    this.setState(state => {
      if (state.text === '') {
        return { error: 'Enter a name!' }
      }

      return { error: '', text: '', players: [...state.players, state.text] }
    });
  }

  renderPlayers() {
    const { players } = this.state;

    if (!players[0]) {
      return;
    }

    return _.map(players, player => {
      return <Text key={player} style={styles.text}>{player}</Text>;
    });
  }

  startGame() {
    const { players } = this.state;

    if (!players[0]) {
      return this.setState({ error: 'Enter some players!' });
    }

    return this.props.navigation.navigate('Score', {
      players: this.state.players
    });
  }

  render() {
    return (
      <Container>
        <Title>Setup</Title>
        <Text style={styles.text}>Who's playing?</Text>
        <TextInput 
          style={styles.input}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Text style={styles.error}>
          {this.state.error}
        </Text>
        <Button onPress={() => this.addPlayer()}>
          Add player
        </Button>
        <View style={{ marginTop: 15 }}>{this.renderPlayers()}</View>
        <Button onPress={() => this.startGame()}>
          Start the game!
        </Button>
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
    fontSize: 20
  },
  input: {
    height: 35,
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

export default SetupScreen;
