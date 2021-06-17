import BaseCard from './BaseCard'
import { shallowMount } from '@vue/test-utils'

describe('BaseCard.vue', () => {
  it('BaseCard - SHOULD be a valid Vue component', () => {
    expect(BaseCard).toBeAValidComponent()
  })

  it('BaseCard - SHOULD have the default props defined', () => {
    const wrapper = shallowMount(BaseCard)

    expect(wrapper.vm.clickable).toBe(false)
  })
})
