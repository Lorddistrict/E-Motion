import React, { Component } from 'react';
import {View, StyleSheet, Text, ImageBackground, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <ImageBackground style={styles.backgroundImage}
                         source={require('../../../assets/bg2.jpg')}
        >
          <View style={styles.mainContainer}>
            <Text style={styles.appTitle}>E-Motion</Text>
          </View>
        </ImageBackground>

        <View style={styles.btmContainer}>
          <TouchableOpacity style={styles.loginField}
                            //onPress={() => this.props.navigation.navigate('Login')}
                            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>

          <Text style={styles.txtBetweenBtn}>Or</Text>

          <TouchableOpacity style={styles.googleField}
                            onPress={() => this.props.navigation.navigate('Register')}
          >
            <Image style={styles.googleLogo}
                   source={require('../../../assets/googleLogo.png')}
            />
            <Text style={styles.googleText}>Sign In With Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.noAccountContainer}>
          <Text style={styles.txtNoAccount}>No account yet ? Sign Up</Text>
        </View>

      </View>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9f57ff',
    justifyContent: 'flex-end',
  },
  mainContainer: {
    alignItems: 'center',
    marginTop: 70,

  },
  appTitle: {
    color: '#ffffff',
    fontSize: 30,
    textTransform: 'uppercase',
  },
  btmContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 50,
  },
  loginField: {
    fontWeight: '500',
    backgroundColor: '#5e55ff',
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: 350,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  googleField: {
    fontWeight: '500',
    borderRadius: 25,
    paddingVertical: 4,
    width: 350,
    borderColor: '#ffffff',
    borderWidth: 1,
    backgroundColor: 'rgba(94,85,255,0.3)',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  googleLogo: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  googleText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  txtBetweenBtn: {
    color: '#ffffff',
    marginVertical: 10,
    fontSize: 16,
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

  },
  noAccountContainer: {
    width: '100%',
    backgroundColor: 'rgba(69,53,255,0.3)',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  txtNoAccount: {
    color: '#ffffff',
    marginVertical: 10,
    fontSize: 16,
  }
});