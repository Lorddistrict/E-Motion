import React, {Component} from 'react'
import {StyleSheet, View, Text, } from 'react-native';

class ProfileScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    )
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: 30,
  },
  title: {
    textTransform: 'uppercase',
    fontSize: 25,
    color: '#CCC'
  },
});