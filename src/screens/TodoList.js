import React, { Component } from 'react';
import { FlatList } from 'react-native';

import TodoHeader from '../components/TodoHeader'
import TodoItem from '../components/TodoItem'
import TodoFooter from '../components/TodoFooter'

class TodoList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.store.todos}
        keyExtractor={({ id }) => `${id}`}
        ListHeaderComponent={TodoHeader}
        ListFooterComponent={() => <TodoFooter {...this.props} />}
        renderItem={(item) => <TodoItem {...item} />}
      />
    );
  }
}

export default TodoList;
