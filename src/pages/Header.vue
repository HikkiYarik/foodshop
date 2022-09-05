<template>
  <div class="сontainer-fluid">
    <div class="row">
      <div class="col-12 top-head">
        <div class="row row-cols-7">
          <div class="col region">Херсон</div>
          <div class="col app-leng">Язык сайта</div>
          <div class="col tel">Номер горячей линии</div>
          <div class="col order-6 home">
            <router-link tag="img" to="/"><img class="logo" src="../assets/logo.png"></router-link>
          </div>
          <div class="col search">Поиск</div>
          <div class="col log-reg">Вход/регистрация</div>
          <div class="col basket">Корзина</div>
        </div>
      </div>
      <div class="col bot-head">
          <NavMenu/>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from './Header/NavMenu.vue'
import Main from '../views/v-main.vue'

export default {
    name: 'Header',
    components: {
        NavMenu,
        Main
    }
}
</script>

<style>
#head {
    display: flex;
    flex: 3;
}
.logo {
    position: relative;
    z-index: -1;
    display: flex;
    justify-content: space-between;
}
</style>