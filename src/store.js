import Vue from 'vue'
import Vuex from 'vuex'
import {
  stat
} from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 属性
    count: 0,
    todos: [{
        id: 1,
        title: "todo item1",
        completed: false
      }, {
        id: 2,
        title: "todo item2",
        completed: true
      }, {
        id: 3,
        title: "todo item3",
        completed: true
      }

    ]
  },
  getters: {
    count: state => ++state.count,
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    // 第一个id是外部传参进来的id,第二个id是内部的id
    getTodosById: state => id => state.todos.find(todo => todo.id == id)

  },
  mutations: {

  },
  actions: {

  }
})