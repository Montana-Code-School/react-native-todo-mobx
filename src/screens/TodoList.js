import React, { Component } from 'react';
import { FlatList } from 'react-native';

import TodoHeader from '../components/TodoHeader'
import TodoItem from '../components/TodoItem'

class TodoList extends Component {
  state = {
    todos: [
      {
        id: 1,
        task: 'Learn Mobx',
        completed: false,
      }, {
        id: 2,
        task: 'convert App to Mobx',
        completed: false,
      }
    ]
  }

  onPressItem = (index) => {
    const todos = [...this.state.todos]
    const todo = { ...todos[index] }
    todo.completed = !todo.completed
    todos[index] = todo
    this.setState({ todos })
  }

  render() {
    return (
      <FlatList
        data={this.state.todos}
        keyExtractor={({ id }) => `${id}`}
        ListHeaderComponent={TodoHeader}
        renderItem={(item) => <TodoItem {...item} index={item.index} pressHandler={this.onPressItem} />}
      />
    );
  }
}

export default TodoList;
