import "bootstrap/dist/css/bootstrap.min.css";
import Vue from 'vue';
import App from './App.vue';
import "bootstrap/dist/js/bootstrap.js";
import router from './router';
import "./styles/app.scss";
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
