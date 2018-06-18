import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

const Container = props => {
  return (
    <ImageBackground
      style={styles.container}
      source={{ uri: 'https://www.desktopbackground.org/p/2012/06/15/405841_disc-golf-wallpapers_720x960_h.jpg'}}
    >
      {props.children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#89b485',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Container;
