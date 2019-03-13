// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style.css'
import '../static/font/iconfont.css'
import Service from './components/service/ServiceP'
import ContactUs from './components/contactUs/ContactUs'
import AboutUs from './components/aboutUs/AboutUs'

Vue.config.productionTip = false
Vue.component('ServiceP', Service)
Vue.component('ContactUs', ContactUs)
Vue.component('AboutUs', AboutUs)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
