<template>
  <ol>
    <todo-item
      v-for='item in groceryList'
      v-bind:todo='item'
      v-bind:key='item.id'>
    </todo-item>
  </ol>
</template>

<script>
const todoItem = {
  props: ['todo'],
  template: '<li>{{ todo. text }}</li>'
}

export default {
  name: 'todo-list',
  components: {
    'todo-item': todoItem
  },
  data: () => ({
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  })
}
</script>

<style lang="css">
</style>
