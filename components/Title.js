import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = props => {
  return (
    <Text style={styles.title}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#88ab4b',
    fontSize: 70,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
  },
});

export default Title;
