<template>
  <div id="app">
    <my-banner />
    <my-menuBar />
    <my-content />
    <my-footer />
  </div>
</template>

<script>
import banner from './Banner.vue'
import footer from './Footer.vue'
import content from './Content.vue'
import menuBar from './menuBar.vue'

export default ({
  components:{
    'my-banner':banner,
    'my-footer':footer,
    'my-content':content,
    'my-menuBar': menuBar
  },
  name: 'app',
  data () {
    return
  }
})
</script>

<style>
body, ul, li, div{margin: 0px; padding: 0px;}
#app {
  font-family: sans-serif;
  width: 360px;
  /* height: 640px; */
  /* background-color: lightgray; */
}
</style>
