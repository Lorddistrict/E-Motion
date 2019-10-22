import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
               source={require('../../../assets/logo.png')}
        />
        <Text style={styles.logoText}>E-Motion</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 104,
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default Logo;