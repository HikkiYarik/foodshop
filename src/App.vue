<template>
  <router-view/>
</template>

<script>
import Home from '../src/views/Home.vue'

export default {
 name: 'App',
 components: {
    Home
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
</style>
