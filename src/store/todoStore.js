import { observable, computed } from 'mobx'

class TodoStore {
  @observable todos = [{
    id: 1,
    task: 'Learn Mobx',
    completed: false,
  }, {
    id: 2,
    task: 'Implement Mobx',
    completed: false,
  }, {
    id: 3,
    task: 'More stuff',
    completed: false,
  }]

  @computed get totalCompleted() {
    return this.todos.filter(({completed}) => completed).length
  }
}

export const todoStore = new TodoStore()
