import React, { Component } from 'react'
import { 
    StyleSheet,
    TextInput,
    View,
} from 'react-native';

export default class UsernameInput extends Component {
    render() {
        var username = this.props.username;
        return (
            <View>
                <TextInput 
                    style={styles.textInput} placeholder='Username'
                    onChangeText={ (username) => this.setState({username}) }
                    underlineColorAndroid='transparent'
                />
            </View>
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