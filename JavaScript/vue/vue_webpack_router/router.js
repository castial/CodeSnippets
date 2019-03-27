import VueRouter from 'vue-router'

import account from './main/Account.vue'
import goodlist from './main/GoodList.vue'
import login from './login/Login.vue'
import register from './login/Register.vue'

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

export default router
