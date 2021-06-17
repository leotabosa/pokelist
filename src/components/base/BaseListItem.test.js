import BaseListItem from './BaseListItem'
import { shallowMount } from '@vue/test-utils'

describe('BaseListItem.vue', () => {
  it('BaseListItem - SHOULD be a valid Vue component', () => {
    expect(BaseListItem).toBeAValidComponent()
  })

  it('BaseListItem - SHOULD have the default props defined', () => {
    const wrapper = shallowMount(BaseListItem)

    expect(wrapper.vm.clickable).toBe(false)
    expect(wrapper.vm.capitalize).toBe(false)
  })
})
