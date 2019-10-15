import React, { Component } from 'react'
import { 
    View, 
    TextInput,
    StyleSheet,
} from 'react-native';

export default class LoginInput extends Component {
    render() {
        return (
            <View style={styles.loginContainer}>
                <TextInput style={styles.loginInput} 
                    placeholder={'Login'}
                    placeholderTextColor={'#ffffff'}
                />
                <TextInput style={styles.loginInput} 
                    placeholder={'Password'}
                    placeholderTextColor={'#ffffff'}
                />
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
    loginInput: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    },
});