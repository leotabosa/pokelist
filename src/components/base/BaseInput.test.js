import BaseInput from './BaseInput'
import { shallowMount } from '@vue/test-utils'

describe('BaseInput.vue', () => {
  it('BaseInput - SHOULD be a valid Vue component', () => {
    expect(BaseInput).toBeAValidComponent()
  })

  it('BaseInput - SHOULD have the default props defined', () => {
    const wrapper = shallowMount(BaseInput)

    expect(wrapper.vm.value).toEqual('')
    expect(wrapper.vm.placeholder).toEqual('')
  })
})
