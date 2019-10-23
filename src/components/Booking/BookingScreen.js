import React, {Component} from 'react'
import {View, Text, StyleSheet, } from 'react-native';

import VehicleList from './VehicleList';
import BackgroundApp from "../Background/BackgroundApp";

class BookingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BackgroundApp />
        <View style={styles.title}>
          <Text style={styles.titleText}>Cars available</Text>
        </View>
        <View style={styles.list}>
          <VehicleList navigation={this.props.navigation} />
        </View>
      </View>
    )
  }
}

export default BookingScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#cec3ff', },

  title: { marginTop: 103, },
  titleText: { color: '#ffffff', fontSize: 20, backgroundColor: 'rgba(58,58,58,0.8)', paddingLeft: 10, paddingVertical: 5, },

  list: { flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 20, },
  icon: { marginRight: 10, color: '#ffffff', }
});