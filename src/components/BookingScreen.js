import React, { Component } from 'react'
import { View, Text } from 'react-native';
import VehicleList from './VehicleList';

export default class ContactScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Booking Screen</Text>
                <VehicleList />
            </View>
        )
    }
}