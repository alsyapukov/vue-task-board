import Vue from 'vue'
import App from './App.vue'
import router from './routes/'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
