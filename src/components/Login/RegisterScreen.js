import React, {Component} from 'react'
import {StyleSheet, View, Text, StatusBar } from 'react-native';
import Logo from "./Logo";
import Form from "./Form";

class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'#1c313a'}
          barStyle={'light-content'}
        />
        <Logo/>
        <Form type={'Register'}/>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet ?</Text>
          <Text style={styles.signupLink}>Sign in</Text>
        </View>
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
  },
  hello: {
    color: '#ffffff',
    fontSize: 18,
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
  },
  signupLink: {
    marginLeft: 5,
    fontWeight: '500',
    color: '#e2faff',
    textTransform: 'uppercase',
  },
});

export default RegisterScreen;