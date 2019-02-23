import Vue from 'vue'
import VueRouter from 'vue-router'


import app from './app.vue'
import account from './main/Account.vue'
import goodlist from './main/GoodList.vue'
import login from './login/Login.vue'
import register from './login/Register.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    routes: [
        {
            path: '/account',
            component: account,
            children: [
                {
                    path: 'login',
                    component: login
                },
                {
                    path: 'register',
                    component: register
                }
            ]
        },
        {
            path: '/goodlist',
            component: goodlist
        }
    ]
})
var vm = new Vue({
    el: '#app',
    render: (c) => c(app),
    router
})