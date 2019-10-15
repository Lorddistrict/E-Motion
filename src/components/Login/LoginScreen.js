import React, { Component } from 'react'
import { 
    View, 
    StyleSheet,
} from 'react-native';
import LoginInput from './LoginInput';
import LoginButton from './LoginButton';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.loginContainer}>
                <LoginInput/>
                <LoginButton/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});