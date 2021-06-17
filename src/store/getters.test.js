import getters from './getters'

describe('src/store/getters', () => {
  it('getter errors - SHOULD return the states list of errors', () => {
    const state = {
      errors: [{ id: 1 }, { id: 2 }, { id: 3 }],
    }

    expect(getters.errors(state)).toEqual(state.errors)
  })
})
