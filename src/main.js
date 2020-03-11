import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


/*lazyload*/
import VueLazyload from 'vue-lazyload'
//Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/src/assets/img/lazyload/error.png',
  loading: require("@/assets/img/lazyload/loading.gif"),
  attempt: 1
});

/*工具类*/
import {utils} from "@/utils/js";
utils.htmlResize();



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


window.onscroll = function (e) {
  console.log(e)
}
