import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
  isApp: 1,
};

export default new Vuex.Store({
    state,
    mutations
})