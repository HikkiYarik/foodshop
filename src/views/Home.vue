<template>
  <div class="home">
    <img alt="App logo" src="../assets/logo.png">
    <InHome/>
    
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