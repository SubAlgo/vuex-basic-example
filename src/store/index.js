import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'default name',
    surname: 'default surname'
  },
  getters: {
    name: state => {
      return state.name
    },
    surname: state => {
      return state.surname
    }
  },
  mutations: {
    setNameMutate (state, name) {
      state.name = name
    },
    setSurnameMutate (state, surname) {
      state.surname = surname
    }
  },
  actions: {
    setUserData (context, userData) {
      context.commit('setNameMutate', userData.name)
      context.commit('setSurnameMutate', userData.surname)
    },
    addPrefix (context) {
      context.commit('setNameMutate', this.state.name + '-Prefix')
      context.commit('setSurnameMutate', this.state.surname + '-Prefix')
    }
  },
  modules: {
  }
})
