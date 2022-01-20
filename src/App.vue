<template>
  <div id='app'>
    <header class="head">
      <router-link to="/"><img alt="App logo" src="./assets/logo.png"></router-link>
    </header>
    <main>
      <nav class="nav-menu">
        <router-link to="/roll" class="active">Роллы</router-link>
        <router-link to="/soup" class="active">Супы</router-link>
        <router-link to="/salad" class="active">Салаты</router-link>
        <router-link to="/panasia" class="active">Паназия</router-link>
        <router-link to="/discount" class="active">Акции</router-link>
        <router-link to="/desert-and-drink" class="active">Десерты и напитки</router-link>
      </nav>
      <div class="content"></div>
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<script>

export default {
 name: 'App'
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
