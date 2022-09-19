<template>
  <div class="container-fluid footer">
    <div class="col-12">
        <div class="row row-cols-4">
          <div class="col first">
            <p class="f-title uppercase">Food Impact</p>
            <router-link class="f-list-el" to="">О компании</router-link> <br/><br/>
            <router-link class="f-list-el" to="">Акции</router-link> 
          </div>
          <div class="col second">
            <p class="f-title">Юридическая информация</p>
            <router-link class="f-list-el" to="">Публичная оферта</router-link> <br/><br/>
            <router-link class="f-list-el" to="">Политика конфиденциальности</router-link>
          </div>
          <div class="col third">
            <p class="f-title">Доставка и рестораны</p>
            <router-link class="f-list-el" to="">Доставка и самовывоз</router-link> <br/><br/>
            <router-link class="f-list-el" to="">Наши рестораны</router-link>
          </div>
          <div class="col fourth">
            <p class="f-title support-title">Поддержка</p>
            <p><router-link class="f-title" to="">0 800 203 123</router-link></p>
            <p><router-link class="f-title" to="">foodimpact@gmail.com</router-link></p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Footer'
}
</script>

<style>
.footer {
  position: absolute; 
  left: 0;
  right: 0;
  bottom: 0; 
  height: 50px; 
}
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