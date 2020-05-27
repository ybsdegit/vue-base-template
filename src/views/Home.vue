<template>
  <div class="home">
    <AddTodo v-on:add-todo="addTodo" />
    <todo v-bind:todos="todos" v-on:delete-todo="deleteTodo" />
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from '@/components/Todo/Todos.vue'
import AddTodo from '@/components/Todo/AddTodo.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    AddTodo,
    Todo
  },
  data () {
    return {
      todos: []
    }
  },

  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  },
  created () {
    axios
      .get('http://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => {
        console.log(res)
        this.todos = res.data
      })
  }
}
</script>
