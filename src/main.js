import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import './assets/bootstrap/docs.css';
import './assets/bootstrap/bootstrap.css';
import './assets/bootstrap/bootstrap-reboot.css';
import './assets/bootstrap/bootstrap-grid.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
