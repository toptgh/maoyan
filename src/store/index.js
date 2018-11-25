import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:'深圳',
    cityID:30
  },
  mutations: {
    setCity(state,value){
      state.city=value;
    },
    setCityID(state,value){
      state.cityID=value;
    }
  },
  actions: {
    selectCity(content,params){
      content.commit('setCity',params.city);
      content.commit('setCityID',params.id);
    }
  }
})
