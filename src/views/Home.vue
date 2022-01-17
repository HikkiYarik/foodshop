<template>
  <div class="home-wrapper">
    <header class="header-app">
      <div class="container">
          <router-link to="/"><img alt="App logo" src="../assets/logo.png"></router-link>
          <input type="search, submit">
          <img src="" alt="img">
      </div>
      <div class="container">
        <router-link to="/roll" class="active">Роллы</router-link>
        <router-link to="/soup" class="active">Супы</router-link>
        <router-link to="/salad" class="active">Салаты</router-link>
        <router-link to="/panasia" class="active">Паназия</router-link>
        <router-link to="/discount" class="active">Акции</router-link>
        <router-link to="/desert-and-drink" class="active">Десерты и напитки</router-link>
      </div> <br/>
    </header>
    <router-view to="/inhome" active-class="active"><InHome/></router-view>
    <footer class="footer-app">
      <div class="footer-containers flex align-stretch ">
        <div class="footer-block"></div>
        <div class="footer-block"></div>
        <div class="footer-block"></div>
        <div class="footer-block"></div>
      </div>
    </footer>
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
html, body {
  height: 100%;
}
.home-wrapper {
  position: relative;
  min-height: 100%;
}
.container-main-logo {
  display: flex;
}
.container-main-another{
  display: flex;
  align-items: center;
}
.container {
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
 }
 .active {
   text-decoration: none;
 }
 .footer-app {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
}
</style>