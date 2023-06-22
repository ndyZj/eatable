import Vue from 'vue'
import Router from 'vue-router'
import Main from './router'
// import home from '../Main.vue'

import home from '.././content.vue'
import banner from '../Banner.vue'
import burgerMenu from '../innerPages/burgerMenu/burgerMenu.vue'
import advSearch from '../innerPages/search/advSearch.vue'
import searchList from '../innerPages/search/searchList.vue'

// import contentPic from '../innerPages/content/contentPic.vue'
// import backBanner from '../innerPages/footer/backBanner.vue'

import grocery from '../innerPages/footer/grocery.vue'
import editGrocery from '../innerPages/footer/editGrocery.vue'

import inventory from '../innerPages/footer/inventory.vue'

import upload from '../innerPages/footer/upload.vue'
import draft from '../innerPages/footer/draft.vue'
import recipe from '../innerPages/content/recipe.vue'
import myRecipe from '../innerPages/footer/myRecipe.vue'
import saved from '../innerPages/footer/saved.vue'

import settings from '../innerPages/footer/settings.vue'

import notif from '../innerPages/footer/notif.vue'



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
            path: '/Main',
            name: 'Main',
            component: Main
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/banner',
            name: 'banner',
            component: banner
        },
        {
            path: '/burgerMenu',
            name: 'burgerMenu',
            component: burgerMenu
        },
        {
            path: '/advSearch',
            name: 'advSearch',
            component: advSearch
        },
        {
            path: '/searchList',
            name: 'searchList',
            component: searchList
        },
        // {
        //     path: '/contentPic',
        //     name: 'contentPic',
        //     component: contentPic
        // },
        {
            path: '/grocery',
            name: 'grocery',
            component: grocery,
        },
        {
            path: '/grocery/editGrocery',
            name: 'editGrocery',
            component: editGrocery,
        },
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
            path: '/draft',
            name: 'draft',
            component: draft
        },
        {
            path: '/recipe',
            name: 'recipe',
            component: recipe
        },
        {
            path: '/myRecipe',
            name: 'myRecipe',
            component: myRecipe
        },
        {
            path: '/saved',
            name: 'saved',
            component: saved
        },
        {
            path: '/settings',
            name: 'settings',
            component: settings
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