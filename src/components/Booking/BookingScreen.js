import React, {Component} from 'react'
import {View, Text, StyleSheet, Platform} from 'react-native';
import VehicleList from './VehicleList';
import BackgroundApp from "../Background/BackgroundApp";
import Icon from "react-native-vector-icons/FontAwesome";

export default class BookingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BackgroundApp />
        <View style={styles.list}>
          <Text style={styles.title}>Cars available</Text>
          <VehicleList />
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
    backgroundColor: '#cec3ff',
  },
  list: {
    flex: 1,
    marginTop: 100,
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    backgroundColor: 'rgba(58,58,58,0.8)',
    paddingLeft: 10,
    paddingVertical: 5,
  },
  icon: {
    marginRight: 10,
    color: '#ffffff',
  }
});