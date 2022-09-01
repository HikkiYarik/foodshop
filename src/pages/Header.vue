<template>
  <div class="head">
    <div class="container-fluid">
      <div class="top-head">
        <router-link tag="img" to="/"><img class="logo" src="../assets/logo.png"></router-link>
      </div>
    </div>
      <div class="bot-head">
          <NavMenu/>
      </div>
  </div>
</template>

<script>
import NavMenu from './Header/NavMenu.vue'
import Main from '../views/v-main.vue'

export default {
    name: 'Header',
    components: {
        NavMenu,
        Main
    }
}
</script>

<style>
#head {
    display: flex;
    flex: 3;
}
.logo {
    position: relative;
    z-index: -1;
    display: flex;
    justify-content: space-between;
}
</style>