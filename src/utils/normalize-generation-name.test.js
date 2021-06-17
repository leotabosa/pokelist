import normalizeName from './normalize-generation-name'

describe('src/utils/normalize-generation-name', () => {
  it('function normalizeName - SHOULD return an normalized generation name if a valid string if passed', () => {
    expect(normalizeName('generation-vi')).toEqual('Generation VI')
  })

  it('function normalizeName - SHOULD return an empty string if no valid string is passed', () => {
    expect(normalizeName(undefined)).toEqual('')
  })
})
