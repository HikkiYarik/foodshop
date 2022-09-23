<template>
  <div class="сontainer-fluid col-12 top-head">

        <div class="row row-cols-7">
          <div class="col region">Херсон</div>
          <div class="col app-leng">Язык сайта</div>
          <div class="col tel">0 800 203 123</div>
          <div class="col order-6 home">
            <router-link tag="img" to="/"><img class="logo" src="../assets/logo.png"></router-link>
          </div>
          <div class="col">
            <input class="search" v-model="search">
          </div>
          <div class="col log-reg">
            <modal>
              <button>Вход/Регистрация</button>
            </modal>
          </div>
          <div class="col basket">Корзина</div>
        </div>
      </div>
      <div class="col bot-head">
          <NavMenu/>
  </div>
</template>

<script>
import NavMenu from './Header/NavMenu.vue'
import Main from '../views/v-main.vue'
// import modal from '../components/v-modalreg.vue'

export default {
    name: 'Header',
    components: {
        NavMenu,
        Main,
        // modal
    }
}
</script>

<style>
#head {
    display: flex;
    flex: 3;
}

.top-head {
  overflow-x: hidden ;
}
.logo {
    position: relative;
    z-index: -1;
    display: flex;
    justify-content: space-between;
}
</style>