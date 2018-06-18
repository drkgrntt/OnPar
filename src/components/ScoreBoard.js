import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Title from './Title';
import * as actions from '../actions';

class ScoreBoard extends Component {
  render() {
    // ex:  "You"  "are"   "3"    "under"
    // ex: "Derek"  "is"   "5"    "over"
    const { player, verb, score, proximity, addScore, subtractScore } = this.props;

    return (
      <View style={styles.view}>
        <TouchableOpacity 
          onPress={() => addScore(score, player)}
        >
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{player} {verb}</Text>
        <Title>{Math.abs(score)}</Title>
        <Text style={styles.text}>{proximity} par!</Text>
        <TouchableOpacity 
          onPress={() => subtractScore(score, player)}
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

export default connect(null, actions)(ScoreBoard);
