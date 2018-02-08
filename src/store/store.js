import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
  // releaseData: localStorage['releaseData'] === undefined ? [] : localStorage['releaseData'],
    releaseData: []
};

export default new Vuex.Store({
    state,
    mutations
})