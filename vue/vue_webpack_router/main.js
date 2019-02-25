import Vue from 'vue'
import VueRouter from 'vue-router'

import app from './app.vue'

import router from './router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)
Vue.use(ElementUI)

var vm = new Vue({
    el: '#app',
    render: (c) => c(app),
    router
})