import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home'
import NotFound from '../page/404'
import TranslucentBorder from '../page/translucent-border'
import MultipleBorder from '../page/multiple-border'
import BorderRadius from '../page/border-radius'

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
      path: '/translucent-border',
      name: 'translucent-border',
      component: TranslucentBorder
    },
    {
      path: '/multiple-border',
      name: 'multiple-border',
      component: MultipleBorder
    },
    {
      path: '/border-radius',
      name: 'border-radius',
      component: BorderRadius
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
