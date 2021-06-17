import mutations from './mutations'

describe('src/store/mutations', () => {
  it('mutation ADD_NEW_ERROR - SHOULD add a new error to the errors list', () => {
    const state = {
      errors: [{ id: 1 }, { id: 2 }, { id: 3 }],
    }

    mutations.ADD_NEW_ERROR(state, {
      status: 404,
      id: state.errors.slice(-1).id,
    })
  })

  it('mutation REMOVE_ERROR - SHOULD remove an error from the state passing an id', () => {
    const state = {
      errors: [{ id: 1 }, { id: 2 }, { id: 3 }],
    }

    mutations.REMOVE_ERROR(state, 1)
    expect(state.errors).toEqual([{ id: 2 }, { id: 3 }])
  })

  it('mutation REMOVE_ERROR - should NOT remove an error if the id doesnt match any id in the list', () => {
    const state = {
      errors: [{ id: 1 }, { id: 2 }, { id: 3 }],
    }

    mutations.REMOVE_ERROR(state, 5)
    expect(state.errors).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }])
  })

  it('mutation REMOVE_ERROR - SHOULD remove the first error if no id is passed', () => {
    const state = {
      errors: [{ id: 1 }, { id: 2 }, { id: 3 }],
    }

    mutations.REMOVE_ERROR(state)
    expect(state.errors).toEqual([{ id: 2 }, { id: 3 }])
  })
})
