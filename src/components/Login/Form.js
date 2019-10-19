import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Form extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
                   underlineColorAndroid={'rgba(0,0,0,0)'}
                   placeholder={'Email'}
                   placeholderTextColor={'#b9b9b9'}
        />
        <TextInput style={styles.inputBox}
                   underlineColorAndroid={'rgba(0,0,0,0)'}
                   placeholder={'Password'}
                   placeholderTextColor={'#b9b9b9'}
                   secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            {this.props.type}
          </Text>
        </TouchableOpacity>
      </View>
    )
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