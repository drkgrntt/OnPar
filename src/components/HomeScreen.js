import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Button from './Button';
import Container from './Container';
import Title from './Title';
import * as actions from '../actions';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerRight: (
        <TouchableOpacity
          onPress={navigation.getParam('login')}
        >
          <Text style={{ color: '#fff', fontSize: 20, marginRight: 20 }}>Login</Text>
        </TouchableOpacity>
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ login: this.login });
  }

  login = () => {
    this.props.navigation.navigate('Auth');
  }

  render() {
    const { resetScoreState, addPlayer, navigation } = this.props;

    return (
      <Container>
        <Title>On Par</Title>
        <Text style={styles.text}>Your mobile disc golf scorecard</Text>
        <Button onPress={() => {
          resetScoreState();
          addPlayer('You');
          navigation.navigate('Score');
        }}>
          Quick Start
        </Button>
        <Button onPress={() => {
          resetScoreState();
          navigation.navigate('Setup');
        }}>
          Multiplayer Quick Start
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic'
  }
})

export default connect(null, actions)(HomeScreen);
