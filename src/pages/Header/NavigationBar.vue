<template>
  <nav class="navbar navbar-expand-sm navbar-expand-md navbar-expand-lg navbar-expand-xl bg-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
      <svg class="ham hamRotate ham8" viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')">
      <path
        class="line top"
        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
      <path
        class="line middle"
        d="m 30,50 h 40" />
      <path
        class="line bottom"
        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
      </svg>
      </button>
    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent">
      <ul
        class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item col">
          <router-link class="router-link" to="/set">Сеты</router-link>
        </li>
        <li class="nav-item col">
          <router-link class="router-link" to="/sushi">Суши и маки роллы</router-link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</template>

<script>
    // import Set from '/Users/tonyt/Документы/GitHub/foodshop/src/views/v-set.vue'
    // import Sushi from '/Users/tonyt/Документы/GitHub/foodshop/src/views/v-sushi.vue'

    import Set from '/myproj/foodimpact/foodshop/src/views/v-set.vue'
    import Sushi from '/myproj/foodimpact/foodshop/src/views/v-sushi.vue'

export default {
    name: 'NavigationBar',
    components: {
        Set,
        Sushi
    }
}
</script>

<style>
.logo {
    position: relative;
    z-index: -1;
    display: flex;
    justify-content: space-between;
}

.navbar {
    box-shadow: 5px 0px 15px 5px #eeeaea;
    border-color: inherit;
    margin: 0%;
    width: 100%;
}
.router-link{
    text-decoration: none;
    color: inherit;
}
.nav-item {
    width: auto;
}



/* styles for burger svg button*/
.navbar-toggler:focus {
    box-shadow: 0 0 0 0rem;
}
.ham8 .top {
  stroke-dasharray: 40 160;
}
.ham8 .middle {
  stroke-dasharray: 40 142;
  transform-origin: 50%;
  transition: transform 400ms;
}
.ham8 .bottom {
  stroke-dasharray: 40 85;
  transform-origin: 50%;
  transition: transform 400ms, stroke-dashoffset 400ms;
}
.ham8.active .top {
  stroke-dashoffset: -64px;
}
.ham8.active .middle {
  
  transform: rotate(90deg);
}
.ham8.active .bottom {
  stroke-dashoffset: -64px;
}

.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.hamRotate.active {
  transform: rotate(45deg);
}
.hamRotate180.active {
  transform: rotate(180deg);
}
.line {
  fill:none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke:#000;
  stroke-width:5.5;
  stroke-linecap:round;
}

</style>