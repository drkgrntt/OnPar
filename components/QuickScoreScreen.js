import React, { Component } from 'react';
import Container from './Container';
import ScoreBoard from './ScoreBoard';

class QuickScoreScreen extends Component {
  static navigationOptions = {
    title: 'QuickScore',
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
    return (
      <Container>
        <ScoreBoard 
          player="You"
          verb="are"
        />
      </Container>
    );
  }
}

export default QuickScoreScreen;
