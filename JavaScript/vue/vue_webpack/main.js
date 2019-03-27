import Vue from 'vue'
import login from './login.vue'

var vm = new Vue({
    el: '#app',
    render: (c) => c(login)
})