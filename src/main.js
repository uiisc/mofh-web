import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import WeChatTitle from 'vue-wechat-title'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/common.css'
import { i18n } from './i18n'

Vue.config.productionTip = false

Vue.use(WeChatTitle)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App)
}).$mount('#app')
