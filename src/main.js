import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import common from './common'//引进公共部分
Vue.use(common);//使用公共部分


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



