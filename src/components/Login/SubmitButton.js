import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SubmitButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        fontWeight: '500',
        backgroundColor: 'rgba(143, 215, 255,0.7)',
        borderRadius: 25,
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: 30
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',
    },
});