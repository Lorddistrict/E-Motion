import React, {Component} from 'react';
import {View, StyleSheet, } from 'react-native';
import BackgroundApp from "../Background/elements/BackgroundApp";

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