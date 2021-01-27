import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: () => import('../views/Beranda')
  },
  {
    path: '/surat',
    name: 'Login Penduduk',
    component: () => import('../views/LoginWarga')
  },
  {
    path: '/surat/cetak/:id/:nama',
    name: 'Cetak surat',
    component: () => import('../views/Surat')
  },
  {
    path: '/Dashboard',
    name: 'Admin',
    component: () => import('../views/Home')
  },
  {
    path: '/Dashboard/:id',
    name: 'Dashboard Admin',
    component: () => import( '../views/Admin.vue')
  },

]

const router = new VueRouter({
  mode: 'history', 
  routes
})

export default router
