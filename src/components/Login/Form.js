import React, {Component} from 'react'
import {StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage, Platform } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
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
        <View style={styles.loginBox}>

          <View style={styles.field}>
            <Icon style={styles.icon}
                  name={Platform.OS === "ios" ? "ios-person" : "md-person"}
                  size={25}
            />
            <TextInput style={styles.inputBox}
                       underlineColorAndroid={'rgba(0,0,0,0)'}
                       placeholder={'Email'}
                       placeholderTextColor={'#b9b9b9'}
                       onChangeText={ (email) => this.setState({email}) }
            />
          </View>

          <View style={styles.field}>
            <Icon style={styles.icon}
                  name={Platform.OS === "ios" ? "ios-lock" : "md-lock"}
                  size={25}
            />
            <TextInput style={styles.inputBox}
                       underlineColorAndroid={'rgba(0,0,0,0)'}
                       placeholder={'Password'}
                       placeholderTextColor={'#b9b9b9'}
                       secureTextEntry={true}
                       onChangeText={ (password) => this.setState({password}) }
            />
          </View>

          <TouchableOpacity style={styles.button}
                            onPress={this.login}
          >
            <Text style={styles.buttonText}>
              {this.props.type}
            </Text>
          </TouchableOpacity>

          <View style={styles.links}>
            <Text style={styles.link}>Create Account</Text>
            <Text style={styles.link}>Forgot Password</Text>
          </View>

        </View>
      </View>
    )
  }

  login = () => {
    fetch('http://51.77.221.45:3000/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        console.log('success');
        AsyncStorage.setItem('user', response.user);
        this.props.navigation.navigate('Home');
      } else {
        alert('error');
      }
    })
    .done();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  field: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginHorizontal: 30,
  },
  icon: {
    color: '#000000',
    paddingHorizontal: 20,
  },
  loginBox: {
    backgroundColor: '#e7e7e7',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: '90%',
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  button: {
    width: 300,
    backgroundColor: '#5e55ff',
    borderRadius: 25,
    marginVertical: 20,
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  links: {
    flexDirection: 'row',
    width: '100%',
  },
  link: {
    marginHorizontal: 45,
    color: '#5e55ff',
    marginTop: 10,
    marginBottom: 50,
  }
});

export default Form;