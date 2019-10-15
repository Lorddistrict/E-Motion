import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';

export default class ContactScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Screen</Text>
                <Button
                    title="Go to Login"
                    onPress={() => this.props.navigation.navigate('LoginScreen')}
                />
            </View>
        )
    }
}