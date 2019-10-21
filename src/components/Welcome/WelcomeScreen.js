import React, { Component } from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage}
                         source={{uri: 'https://mfiles.alphacoders.com/638/638263.png'}}
        >
          <View style={styles.mainContainer}>
            <View style={styles.appTitleContainer}>
              <Text style={styles.appTitle}>E-Motion</Text>
            </View>
            <View style={styles.btmContainer}>
              <TouchableOpacity
                style={styles.loginField}
                //onPress={() => this.props.navigation.navigate('Login')}
                onPress={() => this.props.navigation.navigate('Home')}
              >
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.loginField}
                onPress={() => this.props.navigation.navigate('Register')}
              >
                <Text style={styles.loginText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ImageBackground>
      </View>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7e39ff',
  },
  mainContainer: {
    alignItems: 'center',
  },
  appTitleContainer: {

  },
  appTitle: {

  },
  btmContainer: {

  },
  loginField: {
    fontWeight: '500',
    backgroundColor: '#1c313a',
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 30,
    width: 300,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  backgroundImage:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.6,
  },
  logoContainer: {

  }
});