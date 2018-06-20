import React from 'react';
import _ from 'lodash';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Button from './Button';
import Container from './Container';
import Title from './Title';
import * as actions from '../actions';

class SetupScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: '', text: '' };
  }

  static navigationOptions = {
    title: 'Setup'
  }

  addPlayer() {
    if (this.state.text === '') {
      return this.setState({ error: 'Enter a name!' });
    } else {
      this.props.addPlayer(this.state.text);
      this.setState({ error: '', text: '' });
    }
  }

  renderPlayers() {
    let players = [];
    _.map(this.props.scoreState.scoreCards, scoreCard => {
      players.push(scoreCard.player);
    });

    if (!players[0]) {
      return;
    }

    return _.map(players, player => {
      return <Text key={player} style={styles.text}>{player}</Text>;
    });
  }

  startGame() {
    if (!this.props.scoreState.scoreCards[0]) {
      return this.setState({ error: 'Enter some players!' });
    }

    return this.props.navigation.navigate('Score');
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

const mapStateToProps = state => {
  return { scoreState: state.score };
};

export default connect(mapStateToProps, actions)(SetupScreen);
