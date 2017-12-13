/**
 * Created by Administrator on 2017/3/7.
 */
//main.js这是项目的核心文件。全局的配置都在这个文件里面配置

import App from './App.vue'
import router from './routes.js'
import Element from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
// import VueAmazeui from 'vue-amazeui'
// import 'vue-amazeui/dist/static/css/vue-amazeui.css'


import Vue from 'vue'



//import './assets/styles/base.css'
//import './assets/sass/reset.scss'//报错暂时不用sass



Vue.config.debug = true;//开启错误提示

new Vue({
        router,
        el: '#appIndex',
        render: h => h(App)
})













