import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Squares from '@/components/Squares'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/hello', name: 'Hello', component: Hello },
    { path: '/squares', name: 'Squares', component: Squares }
  ]
})
