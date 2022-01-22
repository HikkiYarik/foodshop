<template>
  <div id='app'>
    <Header/>
    <div class="content">
      <router-view></router-view>
    </div>    
    <Footer/>
  </div>
</template>

<script>
import Header from '../src/views/Header.vue'
import Footer from '../src/views/Footer.vue'


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
}
#app {
  font-family:sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-menu {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
