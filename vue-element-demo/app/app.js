import Vue from 'vue'
import App from './app.vue'

let vm = new Vue({
    el: '#app',
    render: c => c(App)
})