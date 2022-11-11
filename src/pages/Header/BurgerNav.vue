<template>
  <Slide
  width="600"
  class="col-xs-12 col-sm-12"
  >
    <div class="container-fluid div-nav nav-menu">
        <div class="row row-cols-2">
            <div class="col">
                <router-link class="router-link" to="/set">Сеты</router-link>
            </div>    
            <div class="col">
                <router-link class="router-link" to="/sushi">Суши и маки роллы</router-link>
            </div>
        </div>
    </div>
  </Slide>
</template>

<script>
    import  {  Slide  }  from  'vue3-burger-menu'
    // импортируйте переходы CSS, которые вы хотите использовать, в данном случае мы используем `Slide`
    import Set from '/Users/tonyt/Документы/GitHub/foodshop/src/views/v-set.vue'
    import Sushi from '/Users/tonyt/Документы/GitHub/foodshop/src/views/v-sushi.vue'

export default {
    name: 'BurgerNav',
    components: {
        Slide,
        Set,
        Sushi
}
}
</script>

<style>
    .container-fluid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: visible;
    margin-right: 20px;
    margin-left: 20px;
    white-space: nowrap;

}
.router-link{
    text-decoration: none;
    color: inherit;
}
.div-nav {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 160%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: space-around;
    justify-content: space-around;
    padding-top: 7px;
    padding-bottom: 7px;
}
.nav-menu {
    box-shadow: 5px 0px 15px 5px #eeeaea;
    border-color: inherit;
    margin: 0%;
}

</style>