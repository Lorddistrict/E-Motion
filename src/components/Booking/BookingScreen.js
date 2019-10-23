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
        <BackgroundApp/>
        <View style={styles.listContainer}>
          <VehicleList/>
        </View>
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
  listContainer: {
    marginTop: 60,
  },
});