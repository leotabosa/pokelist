import actions from './actions'
jest.useFakeTimers()

describe('src/store/actions', () => {
  it('action addNewError - SHOULD add a new error according to the method used in the request and remove after 5 seconds', () => {
    const commitMock = jest.fn()
    const methods = [
      { name: 'get', prefix: 'recuperar' },
      { name: 'post', prefix: 'criar' },
      { name: 'put', prefix: 'atualizar' },
      { name: 'patch', prefix: 'atualizar' },
      { name: 'delete', prefix: 'remover' },
    ]

    methods.forEach((method, i) => {
      actions.addNewError(
        { commit: commitMock },
        {
          response: { status: 404 },
          config: { headers: { resource: 'gerações' }, method: method.name },
        }
      )
      expect(commitMock).toHaveBeenCalled()
      expect(commitMock).toHaveBeenCalledWith('ADD_NEW_ERROR', {
        status: 404,
        message: `Não foi possível ${method.prefix} o recurso gerações`,
      })
    })

    jest.runAllTimers()
    expect(commitMock).toHaveBeenCalledTimes(10)
    expect(commitMock).toHaveBeenCalledWith('REMOVE_ERROR')
  })

  it('action removeError - SHOULD call a mutation to remove errors from the list', () => {
    const commitMock = jest.fn()
    actions.removeError({ commit: commitMock }, 1)
    expect(commitMock).toHaveBeenCalledWith('REMOVE_ERROR', 1)
  })
})
