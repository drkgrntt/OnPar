import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = (props) => {
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
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
  },
});

export default Title;
