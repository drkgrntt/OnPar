import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={{ color: 'white' }}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 30,
    borderRadius: 7,
    backgroundColor: '#35903b',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    elevation: 3
  },
});

export default Button;
