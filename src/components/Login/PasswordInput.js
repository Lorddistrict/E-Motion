import React, { Component } from 'react'
import { 
    StyleSheet,
    TextInput,
} from 'react-native';

export default class PasswordInput extends Component {
    render() {
        var password = this.props.password;
        return (
            <TextInput 
                style={styles.textInput} placeholder='Password'
                onChangeText={ (password) => this.setState({password}) }
                underlineColorAndroid='transparent'
            />
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});