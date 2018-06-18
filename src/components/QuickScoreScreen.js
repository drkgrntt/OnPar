import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from './Container';
import Title from './Title';
import ScoreBoard from './ScoreBoard';
import Button from './Button';

class QuickScoreScreen extends Component {
  static navigationOptions = {
    title: 'Quick Score',
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

  render() {
    if (this.props.scoreState === undefined) {
      return (
        <Container>
          <Title>No Data</Title>
        </Container>
      );
    }

    const { player, score, proximity } = this.props.scoreState;
    const verb = "are";

    return (
      <Container>
        <ScoreBoard
          player={player}
          verb={verb}
          score={score}
          proximity={proximity}
        />
        <Button onPress={() => this.props.navigation.navigate('Summary', {
          scoreCards: [
            { player, score, proximity }
          ]
        })}>
          Finish
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { scoreState: state.score.scoreCards[0] };
};

export default connect(mapStateToProps)(QuickScoreScreen);
