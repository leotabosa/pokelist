const mutations = {
  ADD_NEW_ERROR(state, error) {
    state.errors.push({ ...error, id: generateUniqueId() })
  },
  REMOVE_ERROR(state, errorId) {
    if (errorId) {
      const index = state.errors.findIndex(({ id }) => id === errorId)
      if (~index) state.errors.splice(index, 1)
    } else state.errors.shift()
  },
}

function generateUniqueId() {
  const randomNumber = Math.floor(Math.random() * 100000)
  return Math.floor(randomNumber * Date.now())
}

export default mutations
