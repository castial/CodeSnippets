import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home'
import NotFound from '../page/404'
import VueKey from '../page/vue-key'
import VueKeyIndex from '../page/vue-key-index'

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
      path: '*',
      name: '404',
      component: NotFound
    },
    {
      path: '/vue-key',
      name: 'vue-key',
      component: VueKey
    },
    {
      path: '/vue-key-index',
      name: 'vue-key-index',
      component: VueKeyIndex
    }
  ]
})
