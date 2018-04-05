import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import _ from 'lodash';
import Container from './Container';
import ScoreBoard from './ScoreBoard';

class ScoreScreen extends Component {
  static navigationOptions = {
    title: 'Scores',
    headerStyle: {
      backgroundColor: '#69a573'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#88ab4b',
      shadowColor: 'black',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 1,
      fontSize: 30
    }
  }

  renderScoreBoards() {
    const { players } = this.props.navigation.state.params;

    return _.map(players, player => {
      return (
        <ScoreBoard
          key={player}
          player={player.toString()}
          verb="is"
        />
      );
    });
  }

  render() {
    return (
      <Container>
        <ScrollView>
          <Container>
            {this.renderScoreBoards()}
          </Container>
        </ScrollView>
      </Container>
    );
  }
}

export default ScoreScreen;
