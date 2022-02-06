<template>
  <div class="foot">
    <FooterNav/>
  </div>
</template>

<script>
import FooterNav from './Footer/FooterNav.vue'

export default {
    name: 'Footer',
    components: {
      FooterNav
    }
}
</script>

<style>
.foot {
  position: absolute; 
  left: 0;
  right: 0;
  bottom: 0; 
  height: 50px; 
}
</style>