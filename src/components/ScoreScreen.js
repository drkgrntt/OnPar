import React, { Component } from 'react';
import { ScrollView, StyleSheet, Platform } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import Container from './Container';
import Button from './Button';
import ScoreBoard from './ScoreBoard';

class ScoreScreen extends Component {
  static navigationOptions = {
    title: 'Scores'
  }

  renderScoreBoards() {
    const { scoreCards } = this.props.scoreState;

    return _.map(scoreCards, ({ player, score, proximity }) => {
      return (
        <ScoreBoard
          key={player}
          player={player.toString()}
          verb="is"
          score={score}
          proximity={proximity}
        />
      );
    });
  }

  renderScoreBoardContainer() {
    const { scoreCards } = this.props.scoreState;

    if (scoreCards.length === 1) {
      const { player, score, proximity } = scoreCards[0];

      return (
        <ScoreBoard
          player={player}
          verb={player === "You" ? "are" : "is"}
          score={score}
          proximity={proximity}
        />
      );
    }

    return (
      <ScrollView style={styles.scrollview}>
        {this.renderScoreBoards()}
      </ScrollView>
    );
  }

  render() {
    const { navigation, scoreState } = this.props;
    return (
      <Container>
        {this.renderScoreBoardContainer()}
        <Button onPress={() => navigation.navigate('Summary', {
          scoreCards: scoreState.scoreCards
        })}>
          Finish
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    width: '100%',
    marginTop: Platform.OS === 'android' ? 24 : 64
  }
});

const mapStateToProps = state => {
  return { scoreState: state.score };
};

export default connect(mapStateToProps)(ScoreScreen);
