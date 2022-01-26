<template>
  <div class="head">
      <div class="top-head">
        <img src="../assets/logo.png">
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
</style>