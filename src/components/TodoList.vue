<template>
  <div class='todo-list'>
    <h3> Todo List </h3>
    <ul>
      <todo-item
        v-for='(item, index) in todos'
        v-bind:todo='item'
        v-bind:key='item'
        v-on:remove='todos.splice(index, 1)'>
      </todo-item>
    </ul>
    <input
      v-model='newTodoText'
      v-on:keyup.enter='addNewtodo'
      placeholder="Add a todo">
  </div>
</template>

<script>
const todoItem = {
  props: ['todo', 'index'],
  template:
  `<li>
    {{ todo }}
    <button @click="$emit('remove')"> X </button>
  </li>`
}

export default {
  name: 'todo-list',
  components: {
    'todo-item': todoItem
  },
  data: () => ({
    newTodoText: '',
    todos: [
      'Learn Vue',
      'Build a cool app'
    ]
  }),
  methods: {
    addNewtodo: function () {
      this.todos.push(this.newTodoText)
      this.newTodoText = ''
    }
  }
}
</script>

<style lang="css">
</style>
