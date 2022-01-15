<template>
  <div class="soup">
    <router-link to="/"><img alt="App logo" src="../assets/logo.png"></router-link> <br/> 
    <div><router-link to="/soup" active-class="active">Супы</router-link></div> <br/>
    <div class="soup-v2">
      <InSoup/>
    </div>
  </div>
</template>

<script>
import InSoup from '../components/InSoup.vue'

export default {
    name: 'Soup',
    components: {
        InSoup
    }
}
</script>

<style>
.soup-v2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
</style>