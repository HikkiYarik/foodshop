<template>
<div class="container">
<div class="row">
  <div class="col-lg-3">
        <p class="f-title uppercase">Food Impact</p>
        <div class="list">
          <router-link class="f-list-el" to="">О компании</router-link> <br/><br/>
          <router-link class="f-list-el" to="">Акции</router-link>
        </div>
  </div>
  <div class="col-lg-3">
        <p class="f-title">Юридическая информация</p>
        <div class="list">
          <router-link class="f-list-el" to="">Публичная оферта</router-link> <br/><br/>
          <router-link class="f-list-el" to="">Политика конфиденциальности</router-link>
        </div>
  </div>
  <div class="col-lg-3">
        <p class="f-title">Доставка и рестораны</p>
        <div class="list">
          <router-link class="f-list-el" to="">Доставка и самовывоз</router-link> <br/><br/>
          <router-link class="f-list-el" to="">Наши рестораны</router-link>
        </div>
  </div>
  <div class="col-lg-3">
        <p class="f-title support-title">Поддержка</p>
        <div class="list">
        <p><router-link class="f-title" to="">0 800 203 123</router-link></p>
        <p><router-link class="f-title" to="">foodimpact@gmail.com</router-link></p>
        </div>
  </div>
</div>
</div>  
</template>

<script>
export default {
    name: 'FooterNav'
}
</script>

<style>
.container-fluid {
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  flex-wrap: wrap;
}
.f-title {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 120%;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
}
.f-list-el {
  text-decoration: none;
  color: inherit;
}
</style>