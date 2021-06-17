import normalizeGeneration from './normalize-generation'

describe('src/utils/normalize-generation', () => {
  it('function normalizeGeneration - SHOULD return an normalized generation if a valid string if passed', () => {
    expect(normalizeGeneration('generation-vi')).toEqual('VI')
  })

  it('function normalizeGeneration - SHOULD return an empty string if no valid string is passed', () => {
    expect(normalizeGeneration(undefined)).toEqual('')
  })
})
