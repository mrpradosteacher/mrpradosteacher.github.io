// import dependency to handle HTTP request to our back end
import axios from 'axios'

//to handle state
const state = {
  users: []
}

//to handle state
const getters = {
  allUsers: (state) => state.users,
}

//to handle actions
const actions = {
  getUsers({ commit }) {
    axios.get(process.env.VUE_APP_BASE_URL + 'data/users.json').then(response => {
      commit('SET_USERS', response.data)
    })
  }
}

//to handle mutations
const mutations = {
  SET_USERS(state, users) {
      state.users = users
  }
}

//export store module
export default {
    state,
    getters,
    actions,
    mutations
}