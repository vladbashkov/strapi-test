import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.mixin({
  URLmixin: 'https://peaceful-dusk-89785.herokuapp.com/api/duty-frees?populate=*'
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
