import { shallowMount } from '@vue/test-utils'
import GenerationDetailsHeader from './GenerationDetailsHeader.vue'

const generation = {
  name: 'Generation I',
  main_region: { name: 'kanto' },
  pokemon_species: [{ name: 1 }, { name: 2 }, { name: 3 }],
  moves: [{ name: 1 }, { name: 2 }],
}

describe('GenerationDetailsHeader.vue', () => {
  it('GenerationDetailsHeader - SHOULD be a valid Vue component', () => {
    expect(GenerationDetailsHeader).toBeAValidComponent()
  })

  it('SHOULD define default props', () => {
    const wrapper = shallowMount(GenerationDetailsHeader)
    expect(wrapper.vm.data).toStrictEqual({})
    expect(wrapper.vm.loading).toBe(false)
  })

  it('computed infos - SHOULD return a summary of all generation info', () => {
    const wrapper = shallowMount(GenerationDetailsHeader, {
      propsData: {
        data: { ...generation },
      },
    })

    expect(wrapper.vm.infos).toEqual({
      regionName: 'kanto',
      pokemonCount: 3,
      movesCount: 2,
    })
  })

  it('computed regionName - SHOULD return the main region name of the generation', () => {
    const wrapper = shallowMount(GenerationDetailsHeader, {
      propsData: {
        data: { ...generation },
      },
    })

    expect(wrapper.vm.regionName).toEqual('kanto')
  })

  it('computed pokemonCount - SHOULD return pokemon the total number of pokémons of the generation', () => {
    const wrapper = shallowMount(GenerationDetailsHeader, {
      propsData: {
        data: { ...generation },
      },
    })

    expect(wrapper.vm.pokemonCount).toEqual(3)
  })

  it('computed pokemonCount - SHOULD return pokemon the total number of moves of the generation', () => {
    const wrapper = shallowMount(GenerationDetailsHeader, {
      propsData: {
        data: { ...generation },
      },
    })

    expect(wrapper.vm.movesCount).toEqual(2)
  })
})
