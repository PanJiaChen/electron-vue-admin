import Vue from 'vue'
import axios from 'axios'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import App from './App'
import router from './router'
import store from './store'

import '@/styles/index.scss' // global css
import '@/icons' // icon
import '@/permission' // permission control

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
