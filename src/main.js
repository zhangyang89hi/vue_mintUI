// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from './http/http.js'
import router from './router'
import store from './store/store.js'

Vue.prototype.axios = axios

// import Eacharts from 'echarts'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    axios,
    store,
    router,
    components: {
        App
    },
    template: '<App/>'
})
