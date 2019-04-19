import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home'
import NotFound from '../page/404'
import TranslucentBorder from '../page/translucent-border'
import MultipleBorder from '../page/multiple-border'
import BorderRadius from '../page/border-radius'
import Float from '../page/float'
import PositionRelative from '../page/position-relative'
import PositionAbsolute from '../page/position-absolute'
import PositionFlexbox from '../page/position-flexbox'

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
      path: '/float',
      name: 'float',
      component: Float
    },
    {
      path: '/relative',
      name: 'relative',
      component: PositionRelative
    },
    {
      path: '/absolute',
      name: 'absolute',
      component: PositionAbsolute
    },
    {
      path: '/flexbox',
      name: 'flexbox',
      component: PositionFlexbox
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
})
