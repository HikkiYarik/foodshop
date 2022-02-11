<template>
  <div class="v-main-content"> 
      <Slider
        :carousel_data="SliderItems"
      />
  </div>
</template>

<script>
import Slider from '../components/v-carousel.vue'

export default {
    name: 'Main',
    components: {
      Slider
    },
    data () {
      return {
        SliderItems: [
          {id: 1, name: 'img1', img: 'desert.png'},
          {id: 2, name: 'img2', img: 'panasia.png'},
          {id: 3, name: 'img3', img: 'roll.png'},
          {id: 4, name: 'img4', img: 'soup.png'},
          {id: 5, name: 'img5', img: 'Sushi.png'}
        ]
      }
    }
}
</script>

<style>

</style>