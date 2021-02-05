import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.continer}>
        <Text> Message </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})