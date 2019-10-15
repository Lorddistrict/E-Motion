import React, { Component } from 'react'
import { 
    View, 
    Text,
    StyleSheet
} from 'react-native';
import VehicleList from './VehicleList';

export default class BookingScreen extends Component {
    render() {
        return (
            <View style={styles.bookingContainer}>
                <Text style={styles.bookingTitle}>Booking Screen</Text>
                <VehicleList />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bookingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bookingTitle: {
        marginTop: 40,
    }
});