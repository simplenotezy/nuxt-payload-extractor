export const store = () => ({
  flag: false
})

export const mutations = {
  SET_FLAG(state, value) {
    state.flag = value
  },
  REFILL_STATE(state, newState) {
    Object.keys(newState).forEach(key => {
      state[key] = newState[key]
    })
  }
}