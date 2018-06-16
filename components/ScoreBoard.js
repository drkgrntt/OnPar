import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Title from './Title';

class ScoreBoard extends Component {
  constructor(props) {
    super(props);

    this.state = { score: 0, proximity: 'on' }
  }

  addScore() {
    this.setState(prevState => {
      const newScore = prevState.score + 1;

      if (newScore > 0) {
        return { score: newScore, proximity: 'over' }
      } else if (newScore < 0) {
        return { score: newScore, proximity: 'under' }
      } else {
        return { score: newScore, proximity: 'on' }
      }
    });
  }

  subtractScore() {
    this.setState(prevState => {
      const newScore = prevState.score - 1;

      if (newScore > 0) {
        return { score: newScore, proximity: 'over' }
      } else if (newScore < 0) {
        return { score: newScore, proximity: 'under' }
      } else {
        return { score: newScore, proximity: 'on' }
      }
    });
  }

  render() {
    const { score, proximity } = this.state;
    const { player, verb } = this.props;

    return (
      <View style={styles.view}>
        <TouchableOpacity 
          onPress={() => this.addScore()}
        >
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{player} {verb}</Text>
        <Title>{Math.abs(score)}</Title>
        <Text style={styles.text}>{proximity} par!</Text>
        <TouchableOpacity 
          onPress={() => this.subtractScore()}
        >
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <View style={styles.hr} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 35
  },
  button: {
    fontSize: 80,
    fontWeight: 'bold',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  hr: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    width: 300,
    height: 5,
    margin: 20
  }
});

export default ScoreBoard;
