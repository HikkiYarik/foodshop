<template>
  <div class="roll">
      <router-link to="/roll" active-class="active">Роллы</router-link>
      <InRoll/>
      
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

</style>