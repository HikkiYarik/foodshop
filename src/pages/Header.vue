<template>
  
  <div class="сontainer-fluid col-12 top-head">
        <div class="row row-cols-7 gx-0">
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
            <!-- <button
              type="button"
              class="btn"
              @click="showModal">
                Open Modal!
              </button>
              <Modal
                v-show="isModalVisible"
                @close="closeModal"/> -->
          </div>


          <div class="col basket">Корзина</div>
        </div>
      </div>
      <div class="col bot-head">
          <NavMenu></NavMenu>
          <!-- <BurgerNav></BurgerNav> -->
      </div>
</template>

<script>
import NavMenu from './Header/NavMenu.vue'
import BurgerNav from './Header/BurgerNav.vue'
import Main from '../views/v-main.vue'

// import modal from '../components/v-modalreg.vue'

export default {
    name: 'Header',
    components: {
        NavMenu,
        BurgerNav,
        Main
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