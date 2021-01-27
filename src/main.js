import Vue from 'vue'

import vuetify from './plugins/vuetify';
import router from './router'
import { setHeaderToken } from "./utils/auth";

import App from './App.vue'

Vue.config.productionTip = false

const token = localStorage.getItem('token');

if (token) { 
  setHeaderToken(token) 
} 

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
