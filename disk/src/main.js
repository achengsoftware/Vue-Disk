import Vue from 'vue'
import router from './router'

import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.use(MintUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
