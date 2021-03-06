/**
 * Created by Administrator on 2017/3/7.
 */

// 引用模板
import Vue from 'vue';
//引入http请求
import VueResource from 'vue-resource'
// import Validator from 'vue-validator'
import Router from 'vue-router';
import indexPage from './components/header.vue'
import homePage from './views/home.vue'
import aboutPage from './views/about.vue'
import musicPage from './views/newMusic.vue'
import loginPage from './views/login.vue'
import registerPage from './views/register.vue'
import musicplayer from './views/musicPlayer.vue'
import billboardPage from './views/billboard.vue'
import singerPage from './views/singer.vue'
import vipPage from './views/vip.vue'
// Vue.use(Validator)
Vue.use(Router)
Vue.use(VueResource)


export default new Router({
    routes: [
        {
            path: '/',
            component: musicPage
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
        },
        {
            path: '/register',
            component: registerPage
        },
        {
            path: '/player',
            component: musicplayer
        },
        {
            path: '/billboard',
            component: billboardPage
        },
        {
            path: '/singer',
            component: singerPage
        },
        {
            path: '/vip',
            component: vipPage
        }
    ]
})