import Vue from 'vue'
import Router from 'vue-router'
import Home from './App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
