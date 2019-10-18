import React, { Component } from 'react';
import { 
  View, 
  StyleSheet,
  Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <TouchableOpacity 
          style={styles.login}
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.login}
          onPress={() => alert('button pressed')}
        >
          <Text style={styles.text}>Sign up</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    fontWeight: '500',
    backgroundColor: 'rgba(143, 215, 255,0.7)',
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 30,
    width: 200
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  }
});