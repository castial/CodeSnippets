import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../page/hello'
import Home from '../page/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    }
  ]
})
