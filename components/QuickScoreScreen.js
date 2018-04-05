import React, { Component } from 'react';
import Container from './Container';
import ScoreBoard from './ScoreBoard';

class QuickScoreScreen extends Component {
  static navigationOptions = {
    title: 'QuickScore',
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
