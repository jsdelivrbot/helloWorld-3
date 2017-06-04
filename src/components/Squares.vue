<template>
  <div id='paper' v-on:click='drawPaper'></div>
</template>

<script>
window.joint = require('jointjs')

export default {
  methods: {
    drawPaper: function () {
      let graph = new joint.dia.Graph
      window.graph = graph

      let paper = new joint.dia.Paper({
        el: this.$el,
        width: 600,
        height: 200,
        model: graph,
        gridSize: 1
      })

      let rect = new joint.shapes.basic.Rect({
        position: { x: 100, y: 30 },
        size: { width: 100, height: 30 },
        attrs: { rect: { fill: 'blue' }, text: { text: 'my box', fill: 'white' } }
      })

      let rect2 = rect.clone()
      rect2.translate(300)

      let link = new joint.dia.Link({
        source: { id: rect.id },
        target: { id: rect2.id }
      })

      graph.addCells([rect, rect2, link])
      window.graph = graph
    }
  }
}
</script>

<style lang="css">
 #paper {
   width: 100px;
   height: 100px;
   border: 1px solid black;
 }
</style>
