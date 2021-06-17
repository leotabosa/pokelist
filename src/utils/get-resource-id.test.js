import getResourceId from './get-resource-id'

describe('src/utils/get-resource-id', () => {
  it('function getResourceId - SHOULD return an id if url is a valid string', () => {
    expect(getResourceId('/generation/1/')).toEqual(1)
  })

  it('function getResourceId - SHOULD return null if no valid url is passed', () => {
    expect(getResourceId(undefined)).toEqual(null)
  })
})
