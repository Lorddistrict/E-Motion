import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity, AsyncStorage,
} from 'react-native';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('Home');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
                   underlineColorAndroid={'rgba(0,0,0,0)'}
                   placeholder={'Email'}
                   placeholderTextColor={'#b9b9b9'}
                   onChangeText={ (username) => this.setState({username}) }
        />
        <TextInput style={styles.inputBox}
                   underlineColorAndroid={'rgba(0,0,0,0)'}
                   placeholder={'Password'}
                   placeholderTextColor={'#b9b9b9'}
                   secureTextEntry={true}
                   onChangeText={ (password) => this.setState({password}) }
        />
        <TouchableOpacity style={styles.button}
                          onPress={this.login}
        >
          <Text style={styles.buttonText}>
            {this.props.type}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  login = () => {
    fetch('http://92.170.169.10:3000/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((res) => {
      console.log('res');
      if (res.success === true) {
        AsyncStorage.setItem('user', res.user);
        this.props.navigation.navigate('Home');
      } else {
        alert(res.message);
      }
    })
    .done();
  }

}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
    height: 50,
  },
  button: {
    width: 200,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingHorizontal: 12,
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default Form;