import { observable } from 'mobx'

class TodoStore {
  @observable todos = [{
    id: 1,
    task: 'Learn Mobx',
    completed: false,
  }, {
    id: 2,
    task: 'Implement Mobx',
    completed: false,
  }]
}

export const todoStore = new TodoStore()
