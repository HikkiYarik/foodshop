<template>
  <div class="salad">
    <router-link to="/"><img alt="App logo" src="../assets/logo.png"></router-link> <br/> 
    <div><router-link to="/salad" active-class="active">Салаты</router-link></div> <br/>
    <div class="salad-v2">
      <InSalad/>
    </div>
  </div>
</template>

<script>
import InSalad from '../components/InSalad.vue'

export default {
    name: 'Salad',
    components: {
        InSalad
    }
}
</script>

<style>
.salad-v2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
</style>