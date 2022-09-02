<template>
  <div class="head">
    <div class="row row-cols-1">
      <div class="top-head col">
        <router-link tag="img" to="/"><img class="logo" src="../assets/logo.png"></router-link>
      </div>
      <div class="bot-head col">
          <NavMenu/>
      </div>
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