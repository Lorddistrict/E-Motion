import React, { Component } from 'react'
import { 
    StyleSheet, 
    View, 
    AsyncStorage, 
    KeyboardAvoidingView 
} from 'react-native';
import Logo from './Logo';
import Title from './Title';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    componentDidMount() {
        this._loadInitailState().done();
    }

    _loadInitailState = async () => {
        var value = await AsyncStorage.getItem('user');
        if (value !== null) {
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Logo />
                    <Title />
                    <UsernameInput username={this.state.username} />
                    <PasswordInput password={this.state.password} />
                    <SubmitButton />
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {

    },
});