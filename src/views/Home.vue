<template>
  <div class="home">
    <header class="header-app">
      <router-link to="/"><img alt="App logo" src="../assets/logo.png"></router-link> <br/>
        <div class="nav-menu">
          <router-link to="/roll">Роллы</router-link>
          <router-link to="/soup" active-class="active">Супы</router-link>
          <router-link to="/salad" active-class="active">Салаты</router-link>
          <router-link to="/panasia" active-class="active">Паназия</router-link>
          <router-link to="/discount" active-class="active">Акции</router-link>
          <router-link to="/desert-and-drink" active-class="active">Десерты и напитки</router-link>
        </div> <br/>
    </header>
    <router-view to="/inhome" active-class="active"><InHome/></router-view>
  </div>
</template>

<script>
import InHome from '../components/InHome.vue'
import Roll from '../views/Roll.vue'
import Soup from '../views/Soup.vue'
import Salad from '../views/Salad.vue'
import PanAsian from '../views/PanAsian.vue'
import Discount from '../views/Discount.vue'
import DesertDrink from '../views/DesertDrink.vue'
/*import Cart from '../views/Cart.vue'*/


export default {
  name: 'Home',
  components: {
    InHome,
    Roll,
    Soup,
    Salad,
    PanAsian,
    Discount,
    DesertDrink
    /*Cart*/
  }
}
</script>



<style>
.nav-menu {
  border-style: solid;
  border-right: hidden;
  border-left: hidden;
  border-color: black;
  text-decoration: none; 
  white-space: nowrap;
  height: 100%;
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: visible;
  text-decoration: none;
 }
</style>