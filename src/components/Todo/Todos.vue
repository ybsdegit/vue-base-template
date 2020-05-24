<template>
  <div class="todos">
    <h2>Todos</h2>
    <div class="todo"
         v-for="todo in todos"
         :key="todo.id"
         :class="{ 'is-complete': todo.completed }">
      <input type="checkbox"
             class=""
             @click="todo.completed = !todo.completed" />
      <button @click="$emit('delete-todo', todo.id)">删除</button>
      {{ todo.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todos',
  props: ['todos']
}
</script>

<style>
.todo {
  background: #ccc;
  padding: 5px, 10px;
  color: #5e5e5e;
  border-bottom: 1px solid #fefefe;
}
.is-complete {
  text-decoration: line-through;
}
</style>
