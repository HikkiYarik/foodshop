<template>
  <router-view/>
  <div id="nav">
    <router-link to="/"></router-link>
  </div>
</template>

<script>
import Home from '../src/views/Home.vue'
//import Roll from '../views/Roll.vue'
//import Soup from '../views/Soup.vue'
//import Salad from '../views/Salad.vue'
//import PanAsian from '../views/PanAsian.vue'
//import Discount from '../views/Discount.vue'
//import DesertDrink from '../views/DesertDrink.vue'
//import Cart from '../views/Cart.vue'

export default {
 name: 'App',
 components: {
    Home
//  Roll,
//  Soup,
//  Salad,
//  PanAsian,
//  Discount,
//  DesertDrink,
//  Cart
 }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
