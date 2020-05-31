import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 按需引入ant-design-vue
import { Button,Col,Row } from 'ant-design-vue';
Vue.use(Button);
Vue.use(Col);
Vue.use(Row);
// Vue.component(Button.name, Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
