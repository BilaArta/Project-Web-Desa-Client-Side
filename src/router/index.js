import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Dashboard/:id',
    name: 'Admin',
    component: () => import( '../views/Admin.vue')
  },
  {
    path: '/Beranda',
    name: 'Beranda',
    component: () => import('../views/Beranda')
  },

]

const router = new VueRouter({
  routes
})

export default router
