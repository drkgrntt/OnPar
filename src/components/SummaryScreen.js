import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import Container from './Container';
import Button from './Button';
import * as actions from '../actions';

class SummaryScreen extends Component {
  static navigationOptions = {
    title: 'Summary',
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

  renderSummaries() {
    const { scoreCards } = this.props.navigation.state.params;

    return _.map(scoreCards, scoreCard => {
      let { player, score, proximity } = scoreCard;
      if (score === 0) {
        score = '';
      } else {
        score = `${Math.abs(score)} `;
      }

      return (
        <View key={player} style={styles.view}>
          <Text style={styles.text}>{player} finished {score}{proximity} par!</Text>
          <View style={styles.hr} />
        </View>
      );
    });
  }

  render() {
    return (
      <Container>
        {this.renderSummaries()}
        <Button onPress={() => this.props.navigation.navigate('Home')}>
          Home
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 25
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
    marginBottom: 5
  }
});

export default connect(null, actions)(SummaryScreen);
