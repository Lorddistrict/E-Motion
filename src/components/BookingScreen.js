import React, { Component } from 'react'
import { 
    View, 
    Text,
    StyleSheet
} from 'react-native';
import VehicleList from './VehicleList';

export default class ContactScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.bookingTitle}>Booking Screen</Text>
                <VehicleList />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bookingTitle: {
        marginTop: 40,
    }
});