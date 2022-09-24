import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/v-main.vue'
import Set from '../views/v-set.vue'
import Sushi from '../views/v-sushi.vue'
import modal from '../components/v-modalreg.vue'


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
  },
  {
    path: '/sushi',
    name: 'sushi',
    component: Sushi
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
