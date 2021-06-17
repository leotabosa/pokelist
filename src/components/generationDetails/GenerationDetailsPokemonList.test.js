import { shallowMount } from '@vue/test-utils'
import GenerationDetailsPokemonList from './GenerationDetailsPokemonList.vue'

jest.useFakeTimers()

describe('GenerationDetailsPokemonList.vue', () => {
  it('GenerationDetailsPokemonList - SHOULD be a valid Vue component', () => {
    expect(GenerationDetailsPokemonList).toBeAValidComponent()
  })

  it('GenerationDetailsPokemonList - SHOULD define default props', () => {
    const wrapper = shallowMount(GenerationDetailsPokemonList)
    expect(wrapper.vm.pokemons).toStrictEqual([])
    expect(wrapper.vm.loading).toBe(false)
  })

  it('computed pokemonsMapped - SHOULD return the full list if no filter is set', () => {
    const wrapper = shallowMount(GenerationDetailsPokemonList, {
      propsData: {
        pokemons: [{ name: 'should pass 1' }, { name: 'should pass 2' }],
      },
    })

    expect(wrapper.vm.pokemonsMapped).toEqual([
      { name: 'should pass 1' },
      { name: 'should pass 2' },
    ])
  })

  it('computed pokemonsMapped - SHOULD return the filtered list if a filter is set', () => {
    const wrapper = shallowMount(GenerationDetailsPokemonList, {
      propsData: {
        pokemons: [{ name: 'should pass 1' }, { name: 'should not pass 2' }],
      },
    })

    wrapper.setData({ filter: '1' })

    expect(wrapper.vm.pokemonsMapped).toEqual([{ name: 'should pass 1' }])
  })

  it('method doFilter - SHOULD attribute the search term and call defineFilter after the timeout', () => {
    const defineFilterMock = jest.fn()
    const wrapper = shallowMount(GenerationDetailsPokemonList)

    wrapper.vm.defineFilter = defineFilterMock
    wrapper.vm.doFilter('test')
    expect(wrapper.vm.searchTerm).toEqual('test')

    jest.runAllTimers()
    expect(defineFilterMock).toHaveBeenCalled()
    expect(defineFilterMock).toHaveBeenCalledWith('test')
  })

  it('method defineFilter - SHOULD attribute the filter in data if it is equal to the searchTerm', () => {
    const wrapper = shallowMount(GenerationDetailsPokemonList, {
      data() {
        return {
          searchTerm: 'test',
        }
      },
    })

    wrapper.vm.defineFilter('test')
    expect(wrapper.vm.filter).toEqual('test')
  })

  it('method defineFilter - should NOT attribute the filter in data if it is NOT equal to the searchTerm', () => {
    const wrapper = shallowMount(GenerationDetailsPokemonList, {
      data() {
        return {
          searchTerm: 'testing',
        }
      },
    })

    wrapper.vm.defineFilter('test')

    expect(wrapper.vm.filter).toEqual('')
  })
})
