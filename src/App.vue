<template>
  <div id='app'>
    <Header></Header>
      <div class="content">
        <router-view/>
      </div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './pages/Header.vue'
import Footer from '../src/pages/Footer.vue'


export default {
 name: 'App',
 components: {
   Header,
   Footer
 }
}
</script>

<style>
html, body {
  margin: 0px;
  width: 100%;
}
#app {
  font-family:sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
