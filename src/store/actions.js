const actions = {
  addNewError({ commit }, error) {
    const prefix = getErrorPrefix(error)
    const status = error.response.status
    const message = `Não foi possível ${prefix} o recurso ${error.config.headers.resource}`

    commit('ADD_NEW_ERROR', { status, message })

    setTimeout(() => {
      commit('REMOVE_ERROR')
    }, 5000)
  },
  removeError({ commit }, errorId) {
    commit('REMOVE_ERROR', errorId)
  },
}

function getErrorPrefix(error) {
  const verb = error.config.method

  switch (verb) {
    case 'get':
      return 'recuperar'
    case 'post':
      return 'criar'
    case 'put':
      return 'atualizar'
    case 'patch':
      return 'atualizar'
    case 'delete':
      return 'remover'
  }
}

export default actions
