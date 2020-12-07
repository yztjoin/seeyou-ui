import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import SeyouUi from '@/components/index'
Vue.config.productionTip = false;
Vue.use(SeyouUi)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
