import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home'
import BackgroundBorder from '../page/background-border'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/background-border',
      name: 'background-border',
      component: BackgroundBorder
    },
    {
      path: '/hello',
      name: 'hello',
      component: BackgroundBorder
    }
  ]
})
