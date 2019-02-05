import Vuex from 'vuex'
import Vue from 'vue'
import * as api from '../api'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  unixtime: ''
}

const actions = {
  async [types.GET_UNIX_TIME] ({ commit }) {
    commit(types.GET_UNIX_TIME, await api.getTime())
  }
}

const getters = {
  [types.GET_JST]: state => {
    return new Date(state.unixtime * 1000)
  }
}

const mutations = {
  [types.GET_UNIX_TIME] (state, payload) {
    state.unixtime = payload
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})