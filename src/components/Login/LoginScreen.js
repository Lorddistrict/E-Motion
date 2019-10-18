import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    StatusBar
} from 'react-native';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#455a64',
    }
});

export default LoginScreen;