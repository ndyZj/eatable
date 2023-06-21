<template>
  <div id="app">
    <div v-if="mainBanner">
      <my-banner />
      <my-menuBar />
    </div>
    <div v-else>
      <my-backBanner />
    </div>
    <!-- <my-banner />
    <my-menuBar /> -->

    <div v-if="router">
      <router-view />
    </div>
    <div v-else>
      <my-content />
      <!-- <my-grocery /> -->
    </div>
    <my-footer />
  </div>
</template>

<script>
import router from './router/router'

import banner from './Banner.vue'
import backBanner from './innerPages/footer/backBanner.vue'


import content from './Content.vue'
import menuBar from './menuBar.vue'

import footer from './Footer.vue'
import grocery from './innerPages/footer/grocery.vue'

export default ({
  components: {
    'my-banner': banner,
    'my-menuBar': menuBar,
    'my-backBanner': backBanner,

    'my-content': content,

    'my-footer': footer,
    'my-grocery': grocery
  },
  name: 'app',
  data() {
    return {
      router,
      grocery,
      mainBanner:false ,
      backBanner,
      // content: true,
      // grocery: false
    }
  },
  // methods:{
  //   toGrocery(){
  //     return{
  //       router : false,
  //       grocery : true
  //     }
  //   }
  // },
})
</script>

<style>
body,
ul,
li,
div {
  margin: 0px;
  padding: 0px;
}

#app {
  font-family: sans-serif;
  width: 360px;
  /* height: 640px; */
  /* background-color: lightgray; */
}

#footerMenu {
  width: 100%;
  height: 55px;
  background-color: #7bae63;
}

#icons>li {
  display: inline-block;
  list-style: none;
}

#footerMenu img {
  /* border: red solid 1px; */
  width: 26px;
  height: 26px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1px;
}

#name {
  /* border: purple solid 1px; */
  display: grid;
  text-decoration: none;
  color: white;
  font-size: 11px;
  width: 60px;
  height: 50px;
  text-align: center;
  margin-left: 8px;
}

#upload {
  /* border: solid 1px purple; */
  padding-left: 11px;
  padding-right: 11px;
  border-radius: 50%;
  position: relative;
  top: 5px;
  left: 5px;
  background-color: white;
  text-decoration: none;
  font-weight: 800;
  font-size: 30px;
  text-align: center;
  color: #2f6d22;
  margin-right: 8px;
  margin-left: 5px;
}</style>
