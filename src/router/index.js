import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/v-main.vue'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/foodimpact/'
    : '/'
}

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
