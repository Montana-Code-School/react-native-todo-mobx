import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native';

const TodoHeader = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Todo Header</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  }
});

export default TodoHeader;
