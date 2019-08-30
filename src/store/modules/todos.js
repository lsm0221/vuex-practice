const state = {
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
};
const getters = {
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    // 第一个id是外部传参进来的id,第二个id是内部的id
    getTodosById: state => id => state.todos.find(todo => todo.id == id)
};
const mutations = {
    setTodos: (state, res) => state.todos = res
};
const actions = {
    async fetchDataAsync(context) {
        const response = await axios.get("http://jsonplaceholder.typicode.com/todos");
        // console.log(response);
        context.commit("setTodos", response.data)
    }
};


export default {
    state,
    getters,
    mutations,
    actions
}