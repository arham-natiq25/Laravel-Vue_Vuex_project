import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [
      {
        title: "todo item a",
        completed: false
      },
      {
        title: "todo item b",
        completed: false
      }
    ]
  },
  getters: {

  },
  mutations: {
    NEW_TODO(state,todoItem)
    {
        state.todos.push({
            title:todoItem,
            completed:false,

        })
    },
    DELETE_TODO(state,todoItem)
    {
        let index = state.todos.indexOf(todoItem)
        state.todos.splice(index,1)
    }
  },
  actions: {
    addNewTodo({commit},todoItem)
    {
        commit('NEW_TODO',todoItem)
    },
    deleteTodo({commit},todoItem)
    {
       commit('DELETE_TODO',todoItem)
    }
  }
});
