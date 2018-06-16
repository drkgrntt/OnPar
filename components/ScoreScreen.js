import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import _ from 'lodash';
import Container from './Container';
import ScoreBoard from './ScoreBoard';

class ScoreScreen extends Component {
  static navigationOptions = {
    title: 'Scores',
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
        <ScrollView style={styles.scrollview}>
          {this.renderScoreBoards()}
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    width: '100%',
    marginTop: 24,
    marginBottom: 17
  }
});

export default ScoreScreen;
