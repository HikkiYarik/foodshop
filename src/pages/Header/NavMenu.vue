<template>
    <div class="nav-menu">
        <div class="container">
            <div class="div-nav">
                <router-link class="router-link" to="/set">Сеты</router-link>
                <router-link class="router-link" to="">Суши и маки роллы</router-link>
                <router-link class="router-link" to="">Роллы</router-link>
                <router-link class="router-link" to="">Супы</router-link>
                <router-link class="router-link" to="">Паназия</router-link>
                <router-link class="router-link" to="">Сашими</router-link>
                <router-link class="router-link" to="">Салаты</router-link>
                <router-link class="router-link" to="">Десерты и напитки</router-link>
                <router-link class="router-link" to="">Акции</router-link>
                <router-link class="router-link" to="">Закуски и дополнения</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Set from '/myproj/foodimpact/src/views/v-set.vue'
export default {
    name: 'NavMenu',
    components: {
        Set,
    }
}
</script>

<style>

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: visible;
    margin-right: 20px;
    margin-left: 20px;
    white-space: nowrap;
    flex-direction:  ;
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

