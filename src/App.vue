<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    {{ message }}
    <input v-model='message'>
    <p v-if='seen'> Now you see me</p>
    <button v-on:click='toggleSeen'> Click Me!</button>
    <ol>
      <todo-item
        v-for='item in groceryList'
        v-bind:todo='item'
        v-bind:key='item.id'>
      </todo-item>
    </ol>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

export default {
  name: 'app',
  data: () => ({
    message: 'Hello Vue!',
    seen: true,
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }),
  methods: {
    toggleSeen: function () { this.seen = !this.seen }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2c3e50;
  margin-top: 60px;
}

ol {
  text-align: left;
}
</style>
