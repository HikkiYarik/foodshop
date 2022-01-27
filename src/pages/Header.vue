<template>
  <div class="head">
      <div class="top-head">
        <img class="logo" src="../assets/logo.png">
      </div>
      <div class="bot-head">
          <NavMenu/>
      </div>
  </div>
</template>

<script>
import NavMenu from './Header/NavMenu.vue'

export default {
    name: 'Header',
    components: {
        NavMenu
    }
}
</script>

<style>
#head {
    display: flex;
}
.logo {
    position: relative;
    z-index: -1;
}
</style>