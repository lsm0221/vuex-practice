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
    // 获取状态,在状态的基础上加一些修饰,不会更改状态
    count: state => state.count,
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    // 第一个id是外部传参进来的id,第二个id是内部的id
    getTodosById: state => id => state.todos.find(todo => todo.id == id)

  },
  mutations: {
    incrementCount: state => state.count++,
    decrementCount: (state, payload) => state.count -= payload.amount
  },
  actions: {

  }
})