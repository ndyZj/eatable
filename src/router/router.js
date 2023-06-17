import Vue from 'vue'
import Router from 'vue-router'
import Main from './router'
import home from '../Main.vue'

import burgerMenu from '../innerPages/burgerMenu/burgerMenu.vue'
import contentPic from '../innerPages/content/contentPic.vue'

import backBanner from '../innerPages/footer/backBanner.vue'

import grocery from '../innerPages/footer/grocery.vue'

import inventory from '../innerPages/footer/inventory.vue'
import upload from '../innerPages/footer/upload.vue'
import saved from '../innerPages/footer/saved.vue'
import notif from '../innerPages/footer/notif.vue'
// import VueRouter from 'vue-router'



Vue.use(Router)

Vue.config.productionTip = false

// const routes = [
//     {
//         path: '/grocery',
//         component: grocery
//     }
// ];
// const router = new VueRouter({
//     routes
// });
// new Vue ({
//     router
// }).$mount('#App')

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/innerPages/burgerMenu/burgerMenu',
            name: 'burgerMenu',
            component: burgerMenu
        },
        {
            path: '/contentPic',
            name: 'contentPic',
            component: contentPic
        },
        {
            path: '/grocery/backBanner',
            name: 'backBanner',
            component: backBanner
        },
        {
            path: '/grocery',
            name: 'grocery',
            component: grocery,
            //     children:[
            //         {
            //             path:'/grocery/groceryView',
            //             name:'groceryView',
            //             component: groceryView
            //         },
            //     ]
        },
        // {
        //     path:'/grocery',
        //     redirect: '/grocery'
        // },
        // {
        //     path: '/groceryView',
        //     name: 'groceryView',
        //     component: groceryView
        // },
        {
            path: '/inventory',
            name: 'inventory',
            component: inventory
        },
        {
            path: '/upload',
            name: 'upload',
            component: upload
        },
        {
            path: '/saved',
            name: 'saved',
            component: saved
        },
        {
            path: '/notif',
            name: 'notif',
            component: notif
        }
    ]
})
// router.push ({ path: '/home', replace: true})
// router.replace({path:'/grocery'})
//used for innerpages