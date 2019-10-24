import React, {Component} from 'react'
import {StyleSheet, View, } from 'react-native';
import Form from "./Form";
import BackgroundCity from "../Background/elements/BackgroundCity";

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BackgroundCity />
        <Form type={'Sign In'} navigation={this.props.navigation} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9f57ff',
  },
});

export default LoginScreen;