import Vue from 'vue'
import Main from './Main.vue'

import grocery from './innerPages/footer/grocery.vue'

import router from './router/router.js'

Vue.config.productionTip=false

new Vue({
  router, 
  el: '#app',
  // render(createElement){
  //   return createElement('App',{},);
  // }
  render: h => h(Main)
  // render: h => h(grocery)
})
// new Vue({
//   router,
//   el: '#grocery'
//   render: h => h(grocery)
// })
