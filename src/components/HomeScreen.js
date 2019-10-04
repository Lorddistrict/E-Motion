import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.vehicleListHeader}>Welcome</Text>
                </ScrollView>
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
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    vehicleListHeader: {
      fontSize: 20,
      color: '#000',
      textTransform: 'uppercase',
      marginTop: '60%',
    }
  });