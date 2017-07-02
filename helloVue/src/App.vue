<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    {{ message }}
    <input v-model='message'>
    <p v-if='seen'> Now you see me</p>
    <button @click='toggleSeen'> Click Me!</button>
    <todoList></todoList>
    <counter></counter>
  </div>
</template>

<script>
import todoList from './components/TodoList'
import counter from './components/counter'

export default {
  name: 'app',
  components: { todoList, counter },
  data: () => ({
    message: 'Hello Vue!',
    seen: true
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
