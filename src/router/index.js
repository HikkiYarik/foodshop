import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/v-main.vue'
import Set from '../views/v-set.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/set',
    name: 'set',
    component: Set
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
