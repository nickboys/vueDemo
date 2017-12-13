/**
 * Created by Administrator on 2017/3/7.
 */

// 引用模板
import Vue from 'vue';
import Validator from 'vue-validator'
import Router from 'vue-router';
import indexPage from './components/header.vue'
import homePage from './views/home.vue'
import aboutPage from './views/about.vue'
import musicPage from './views/newMusic.vue'
import loginPage from './views/login.vue'

Vue.use(Validator)
Vue.use(Router)



export default new Router({
    routes: [
        {
            path: '/',
            component: homePage
        },
        {
            path: '/about',
            component: aboutPage
        },
        {
            path: '/music',
            component: musicPage
        },
        {
            path: '/login',
            component: loginPage
        }
    ]
})