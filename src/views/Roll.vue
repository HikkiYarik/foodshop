<template>
  <div class="roll">
    <router-link to="/"><img alt="App logo" src="../assets/logo.png"></router-link> <br/> 
    <div><router-link to="/roll" active-class="active">Роллы</router-link></div> <br/>
    <div class="roll-v2">
      <InRoll/>
    </div>
  </div>
</template>

<script>
import InRoll from '../components/InRoll.vue'

export default {
    name: 'Roll',
    components: {
        InRoll
    }
}
</script>

<style>
.roll-v2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
</style>