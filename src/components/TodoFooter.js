import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react'

@observer
class TodoFooter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Completed: {this.props.store.totalCompleted}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  }
});

export default TodoFooter;
