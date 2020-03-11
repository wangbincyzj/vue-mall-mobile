import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {

  },
  modules: {}
})

/*
* actions里面的方法返回的都是Promise对象,有点类似于 return Promise.resolve()
 */
