import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Roll from '../views/Roll.vue'
import InHome from '../components/InHome'
import Soup from '../views/Soup.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/roll',
    name: 'roll',
    component: Roll
  },
  {
    path: '/inhome',
    name: '/inhome',
    component: InHome
  },
  {
    path: '/soup',
    name: 'soup',
    component: Soup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
