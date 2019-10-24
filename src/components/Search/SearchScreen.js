import React, { Component } from 'react'
import { StyleSheet, View, Text, } from 'react-native';
import BackgroundApp from "../Background/elements/BackgroundApp";

export default class ContactScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BackgroundApp />
        <View style={styles.title}>
          <Text style={styles.titleText}>Search a car</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, },
  title: { marginTop: 103, },
  titleText: { color: '#ffffff', fontSize: 20, backgroundColor: 'rgba(58,58,58,0.8)', paddingLeft: 10, paddingVertical: 5, },
});