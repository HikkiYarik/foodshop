<template>
  <div class="home">
    <router-link to="/"><img alt="App logo" src="../assets/logo.png"></router-link> <br/>
    <router-link to="/roll" active-class="active">Роллы</router-link> <br/>
    <router-view to="/inhome" active-class="active"><InHome/></router-view>
  </div>
</template>

<script>
import InHome from '../components/InHome.vue'
import Roll from '../views/Roll.vue'
/*import Soup from '../views/Soup.vue'
import Salad from '../views/Salad.vue'
import PanAsian from '../views/PanAsian.vue'
import Discount from '../views/Discount.vue'
import DesertDrink from '../views/DesertDrink.vue'
import Cart from '../views/Cart.vue'
*/
export default {
  name: 'Home',
  components: {
    InHome,
    Roll
    /*Soup,
    Salad,
    PanAsian,
    Discount,
    DesertDrink,
    Cart */
  }
}
</script>



<style>

</style>