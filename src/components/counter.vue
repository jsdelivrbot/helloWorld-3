<template>
  <div class='counter'>
    <h3> Counter </h3>
    <p>total: {{ total }}</p>
    <button-counter v-on:increment='incrementTotal'></button-counter>
    <button-counter v-on:increment='incrementTotal'></button-counter>
    <button-counter v-on:increment='incrementTotal'></button-counter>
  </div>
</template>

<script>
const buttonCounter = {
  template: "<button @click='increment'>{{ counter }}</button>",
  data: () => ({
    counter: 0
  }),
  methods: {
    increment: function () {
      this.counter += 1
      this.$emit('increment')
    }
  }
}

export default {
  name: 'counter',
  components: {
    'button-counter': buttonCounter
  },
  data: () => ({
    total: 0
  }),
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
}
</script>

<style lang="css">
</style>
