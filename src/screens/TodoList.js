import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { observer } from 'mobx-react'

import TodoHeader from '../components/TodoHeader'
import TodoItem from '../components/TodoItem'
import TodoFooter from '../components/TodoFooter'

@observer
class TodoList extends Component {

  onPressItem = (index) => {
    const { todos } = this.props.store
    console.log('todos ', todos)
    todos[index].completed = !todos[index].completed
  }

  render() {
    return (
      <FlatList
        data={this.props.store.todos}
        keyExtractor={({ id }) => `${id}`}
        ListHeaderComponent={TodoHeader}
        ListFooterComponent={() => <TodoFooter {...this.props} />}
        renderItem={(item) => <TodoItem {...item} index={item.index} pressHandler={this.onPressItem} />}
      />
    );
  }
}

export default TodoList;
