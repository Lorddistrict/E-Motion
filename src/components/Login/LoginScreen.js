import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';
import Logo from "./Logo";
import Form from "./Form";

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'#1c313a'}
          barStyle={'light-content'}
        />
        <Logo />
        <Form type={'Login'}/>
        <View style={styles.signinTextCont}>
          <Text style={styles.signinText}>Already have an account ?</Text>
          <Text style={styles.signinLink}>
            Sign in
          </Text>
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
  signinTextCont: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 16,
    flexDirection: 'row',
  },
  signinText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
  },
  signinLink: {
    marginLeft: 5,
    fontWeight: '500',
    color: '#e2faff',
    textTransform: 'uppercase',
  },
});

export default LoginScreen;