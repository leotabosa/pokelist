import { shallowMount } from '@vue/test-utils'
import GenerationsDetailsPokemonTypes from './GenerationsDetailsPokemonTypes.vue'

describe('GenerationsDetailsPokemonTypes.vue', () => {
  it('GenerationsDetailsPokemonTypes - SHOULD be a valid Vue component', () => {
    expect(GenerationsDetailsPokemonTypes).toBeAValidComponent()
  })

  it('SHOULD define default props', () => {
    const wrapper = shallowMount(GenerationsDetailsPokemonTypes)
    expect(wrapper.vm.types).toStrictEqual([])
    expect(wrapper.vm.loading).toBe(false)
  })

  it('watcher types - SHOULD return mapped types with icon and pt-br names', () => {
    const wrapper = shallowMount(GenerationsDetailsPokemonTypes, {
      propsData: {
        types: [{ name: 'normal' }],
      },
    })

    wrapper.vm.$options.watch.types.handler.call(wrapper.vm)
    expect(wrapper.vm.mappedTypes).toEqual([
      {
        name: 'normal',
        namePtBr: 'Normal',
        iconUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/120px-Pok%C3%A9mon_Normal_Type_Icon.svg.png',
      },
    ])
  })
})
