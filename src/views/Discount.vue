<template>
  <div class="discount">
    <router-link to="/"><img alt="App logo" src="../assets/logo.png"></router-link> <br/> 
    <div><router-link to="/discount" active-class="active">Акции</router-link></div> <br/>
    <div class="discount-v2">
      <InDiscount/>
    </div>
  </div>
</template>

<script>
import InDiscount from '../components/InDiscount.vue'

export default {
    name: 'Discount',
    components: {
        InDiscount
    }
}
</script>

<style>
.discount-v2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
</style>