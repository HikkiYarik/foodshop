<template>
  
  <div class="сontainer-fluid">
    <div class="col-12 top-head">
        <div class="row row-cols-7 gx-0">
          <!-- <div class="col region">Херсон</div>
          <div class="col app-leng">Язык сайта</div>
          <div class="col tel">0 800 203 123</div> -->
          <div class="col order-6 home">
            <router-link tag="img" to="/"><img class="logo" src="../assets/logo.png"></router-link>
          </div>
          <!-- <div class="col search">
            <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div> -->
          <!-- <div class="col log-reg">Sign In</div>
          <div class="col basket">Корзина</div> -->
        </div>
      </div>
    </div>
      <div class="col-12 bot-head">
          <!-- <NavigationBar></NavigationBar> -->
          <NavMenu class="nav-big"></NavMenu>
      </div>
</template>

<script>
import Main from '../views/v-main.vue'
import NavMenu from './Header/NavMenu.vue'

// import modal from '../components/v-modalreg.vue'

export default {
    name: 'Header',
    components: {
        Main,
        NavMenu
        // NavigationBar
        // modal
    }
    // data () {
    //   return {
    //     isModalVisible: false,
    //   };
    // },
    // methods: {
    //   showModal() {
    //     this.isModalVisible = true;
    //   },
    //   closeModal() {
    //     this.isModalVisible = false;
    //   }
    // },
    
}
</script>

<style lang="scss">

@import 'bootstrap/scss/_functions.scss';
@import 'bootstrap/scss/_variables.scss';
@import 'bootstrap/scss/_mixins.scss';

@include media-breakpoint-only(xs, sm) {
  .nav-big {
    display: none;
  }
}

@include media-breakpoint-only(md, lg, xl) {}
</style>




<style>
#head {
    display: flex;
    flex: 3;
    width: 100%;
}

.logo {
    position: relative;
    z-index: -1;
    display: flex;
    justify-content: space-between;
}
</style>