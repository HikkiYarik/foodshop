<template>
  <div class="v-main-content"> 
      <Slider/>
  </div>
</template>

<script>
import Slider from '../components/v-carousel.vue'

export default {
    name: 'Main',
    components: {
      Slider,
    }
}
</script>

<style>
#v-main-content {
  position: relative;
}
</style>