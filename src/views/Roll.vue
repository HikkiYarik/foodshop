<template>
  <div class="roll"> 
    <router-link to="/roll" active-class="active">Роллы</router-link>
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