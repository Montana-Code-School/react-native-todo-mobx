import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons'

const TodoItem = ({ item, index, pressHandler }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => pressHandler(index)}>
      <Text style={[styles.text, item.completed ? styles.taskCompleted : {}]}>{item.task}</Text>
      <Ionicon
        name={item.completed ? 'ios-checkbox' : 'ios-square-outline'}
        color={item.completed ? 'green' : 'red'}
        size={20}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  taskCompleted: {
    opacity: 0.5,
    textDecorationLine: 'line-through'
  },
});

//make this component available to the app
export default TodoItem;
