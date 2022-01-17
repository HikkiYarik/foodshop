import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Roll from '../views/Roll.vue'
import InHome from '../components/InHome'
import Soup from '../views/Soup.vue'
import Salad from '../views/Salad.vue'
import PanAsian from '../views/PanAsian.vue'
import Discount from '../views/Discount.vue'
import DesertDrink from '../views/DesertDrink.vue'


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
  },
  {
    path: '/salad',
    name: 'salad',
    component: Salad
  },
  {
    path: '/panasia',
    name: 'panasia',
    component: PanAsian
  },
  {
    path: '/discount',
    name: 'discount',
    component: Discount
  },
  {
    path: '/desert-and-drink',
    name: 'desert-and-drink',
    component: DesertDrink
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
