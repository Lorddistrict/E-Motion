import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView,} from 'react-native';

import VehicleList from '../elements/VehicleList';
import BackgroundApp from "../../Background/elements/BackgroundApp";
import HeaderTitle from "../../Headers/elements/HeaderTitle";

class BookingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <BackgroundApp />
          <HeaderTitle title={'Our cars'} />
        <ScrollView>
          <View style={styles.list}>
            <VehicleList navigation={this.props.navigation} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cec3ff',
  },
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
    color: '#ffffff',
  },
});