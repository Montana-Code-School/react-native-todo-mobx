import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { todoStore } from './src/store/todoStore'
import TodoList from './src/screens/TodoList'

export default class App extends React.Component {
  render() {
    return (
      <TodoList store={todoStore}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
