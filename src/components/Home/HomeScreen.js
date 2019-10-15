import React, { Component } from 'react';
import { 
  View, 
  ImageBackground, 
  StyleSheet
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.homeContainer}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
    }
  });