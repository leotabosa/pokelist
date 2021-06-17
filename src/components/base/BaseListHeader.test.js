import BaseListHeader from './BaseListHeader'
import { shallowMount } from '@vue/test-utils'

describe('BaseListHeader.vue', () => {
  it('BaseListHeader - SHOULD be a valid Vue component', () => {
    expect(BaseListHeader).toBeAValidComponent()
  })

  it('BaseListHeader - SHOULD have the default props defined', () => {
    const wrapper = shallowMount(BaseListHeader)

    expect(wrapper.vm.listTitle).toEqual('Lista')
    expect(wrapper.vm.withFilter).toBe(false)
  })
})
