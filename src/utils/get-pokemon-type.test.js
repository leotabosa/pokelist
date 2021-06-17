import getPokemonType from './get-pokemon-type'

describe('src/utils/get-pokemon-type', () => {
  it('function getPokemonType - SHOULD return a pokemon type if found', () => {
    expect(getPokemonType('normal')).toEqual({
      name: 'normal',
      namePtBr: 'Normal',
      iconUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/120px-Pok%C3%A9mon_Normal_Type_Icon.svg.png',
    })
  })

  it('function getPokemonType - SHOULD return a empty object if no type is found', () => {
    expect(getPokemonType('empty-type')).toEqual({})
  })
})
