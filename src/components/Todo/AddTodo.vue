<template>
  <div>
    <form @submit.prevent="submit">
      <input type="text" placeholder="Add Todo" v-model="title"/>
      <input type="submit" value="Add"/>
    </form>
  </div>
</template>

<script>
// import uuid from 'uuid'
export default {
  name: 'AddTodo',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    S4 () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    },
    submit () {
      const todo = {
        id: this.S4(),
        title: this.title,
        completed: false
      }
      this.title = ''
      this.$emit('add-todo', todo)
    }

  }
}
</script>

<style>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  border: 1px solid #ccc;
  padding: 4px;

}

input[type="submit"] {
  flex: 1;
  border: 1px solid #ccc;
;
}
</style>
