import React, { Component } from 'react'
import { 
    View, 
    Text,
    StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginButton extends Component {
    render() {
        return (
            <View style={styles.loginContainer}>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginBtnText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginBtn: {
        fontWeight: '500',
        backgroundColor: 'rgba(143, 215, 255,0.7)',
        borderRadius: 25,
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: 30
    },
    loginBtnText: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',
    },
});