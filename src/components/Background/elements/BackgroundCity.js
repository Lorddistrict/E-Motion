import React, {Component} from 'react'
import {StyleSheet, View, Text, ImageBackground} from 'react-native';

class BackgroundCity extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../../assets/bg2.jpg')}
      >
        <View style={styles.mainContainer}>
          <Text style={styles.appTitle}>E-Motion</Text>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    marginTop: 70,
  },
  appTitle: {
    color: '#ffffff',
    fontSize: 30,
    textTransform: 'uppercase',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.6,
  },
});

export default BackgroundCity;