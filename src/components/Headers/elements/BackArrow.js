import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

class BackArrow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Booking');
          }}
        >
          <Icon
            style={styles.icon}
            name={'chevron-left'}
            size={30}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default BackArrow;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'flex-start',
    marginTop: 36,
    marginLeft: 20,
    alignItems: 'flex-start',
    zIndex: 10,
  },
  icon: {
    color: '#ffffff',
  },
});