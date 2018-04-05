import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89b485',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Container;
