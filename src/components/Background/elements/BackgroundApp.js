import React, {Component} from 'react'
import {StyleSheet, View, Text, ImageBackground} from 'react-native';

class BackgroundApp extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../../assets/bg2.jpg')}
        resizeMode={'cover'}
      >
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: '60%',
  },
});

export default BackgroundApp;