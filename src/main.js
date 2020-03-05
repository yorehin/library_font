// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style.css'
import '../static/font/iconfont.css'
import Service from './components/pc/service/ServiceP'
import Product from './components/pc/product/Product'
import ContactUs from './components/pc/contactUs/ContactUs'
import AboutUs from './components/pc/aboutUs/AboutUs'
import Login from './components/back/Login'
import ElementUI from 'element-ui'
import './assets/element-variables.scss'
//sngm pe
Vue.config.productionTip = false
Vue.component('ServiceP', Service)
Vue.component('Product', Product)
Vue.component('ContactUs', ContactUs)
Vue.component('AboutUs', AboutUs)
Vue.component('Login', Login)
/* eslint-disable no-new */
Vue.use(ElementUI)
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
