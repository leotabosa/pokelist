import BaseList from './BaseList'
import { shallowMount } from '@vue/test-utils'

describe('BaseList.vue', () => {
  it('BaseList - SHOULD be a valid Vue component', () => {
    expect(BaseList).toBeAValidComponent()
  })

  it('BaseList - SHOULD have the default props defined', () => {
    const wrapper = shallowMount(BaseList)

    expect(wrapper.vm.items).toEqual([])
    expect(wrapper.vm.listTitle).toEqual('Lista')
    expect(wrapper.vm.clickableItens).toBe(false)
    expect(wrapper.vm.propToDisplay).toEqual('')
    expect(wrapper.vm.capitalize).toBe(false)
    expect(wrapper.vm.withFilter).toBe(false)
    expect(wrapper.vm.loading).toBe(false)
  })
})
