import React, {Component} from 'react';
import {View, StyleSheet, Text } from 'react-native';

class HeaderTitle extends Component {
  render() {
    return (
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

export default HeaderTitle;

const styles = StyleSheet.create({
  title: {
    paddingTop: 30,
    backgroundColor: 'rgba(58,58,58,0.8)',
    alignItems: 'center',
    paddingBottom: 10,
  },
  titleText: {
    color: '#ffffff',
    fontSize: 20,
    paddingLeft: 10,
    paddingVertical: 5,
  },
});