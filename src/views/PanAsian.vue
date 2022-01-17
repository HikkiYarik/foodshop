<template>
  <div class="panasia">
    <router-link to="/"><img alt="App logo" src="../assets/logo.png"></router-link> <br/> 
    <div><router-link to="/panasia" active-class="active">Паназийская кухня</router-link></div> <br/>
    <div class="panasia-v2">
      <InPanAsian/>
    </div>
  </div>
</template>

<script>
import InPanAsian from '../components/InPanAsian.vue'

export default {
    name: 'PanAsian',
    components: {
        InPanAsian
    }
}
</script>

<style>
.panasia-v2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
</style>