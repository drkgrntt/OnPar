import React, { Component } from 'react';
import { ScrollView, StyleSheet, Platform } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import Container from './Container';
import Button from './Button';
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
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#88ab4b',
      textShadowColor: 'black',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 5,
      fontSize: 30
    }
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

  render() {
    const { navigation, scoreState } = this.props;
    return (
      <Container>
        <ScrollView style={styles.scrollview}>
          {this.renderScoreBoards()}
        </ScrollView>
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
    marginTop: Platform.OS === 'android' ? 24 : 64,
  }
});

const mapStateToProps = state => {
  return { scoreState: state.score };
};

export default connect(mapStateToProps)(ScoreScreen);
