import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BackgroundApp from "../Background/BackgroundApp";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BackgroundApp />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});