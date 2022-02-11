<template>
<div class="wrapper">
    <div class="v-caruosel" :style="{'margin-left': '-' + (100 * currentSlidetindex) + '%'}">
        <SliderItems
            v-for="item in carousel_data"
            :key="item.id"
            :item_data="item"
        />
        
    </div>
    <button @click="PrevSlide">Prev</button>
    <button @click="NextSlide">Next</button>
</div>
</template>

<script>
import SliderItems from '../components/v-carouselitem.vue'

export default {
    name: 'Slider',
    components: {
        SliderItems
  },
    props: {
        carousel_data: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            currentSliderIndex: 0
        }
    },
    methods: {
        PrevSlide () {
            if(this.currentSliderIndex > 0) {
                this.currentSliderIndex--
                console.log (this.currentSliderIndex)
            }
        },
        NextSlide () {
            this.currentSliderIndex++
            console.log (this.currentSliderIndex)
        }
    }
    
}
</script>

<style>
.v-caruosel {
    display: flex;
  width: 700px;
  height: 450px;
  margin: 3px;
  overflow: hidden;
}
.v-caruosel > img {
    max-width: 100%;
  width: auto\9;
  height: 100%;
  vertical-align: middle;
  border: 0;
}
</style>