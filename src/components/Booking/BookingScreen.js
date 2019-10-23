import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import VehicleList from './VehicleList';
import BackgroundApp from "../Background/BackgroundApp";

export default class BookingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BackgroundApp />
        <VehicleList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cec3ff',
  }
});