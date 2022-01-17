<template>
  <div class="desertdrink">
    <router-link to="/"><img alt="App logo" src="../assets/logo.png"></router-link> <br/> 
    <div><router-link to="/desert-and-drink" active-class="active">Десерты и напитки</router-link></div> <br/>
    <div class="desertdrink-v2">
      <InDesertDrink/>
    </div>
  </div>
</template>

<script>
import InDesertDrink from '../components/InDesertDrink.vue'

export default {
    name: 'DesertDrink',
    components: {
        InDesertDrink
    }
}
</script>

<style>
.desertdrink-v2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
</style>