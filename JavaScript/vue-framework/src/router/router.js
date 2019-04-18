import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../page/hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    }
  ]
})
