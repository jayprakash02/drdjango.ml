import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import '@/assets/style.css'
import '@/assets/vendor/font-awesome.css'
import '@/assets/vendor/animate.css'
import '@/assets/vendor/jquery.lavalamp.css'
import '@/assets/vendor/linear-icons.css'
import '@/assets/vendor/owl.carousel.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
