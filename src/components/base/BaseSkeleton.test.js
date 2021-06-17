import BaseSkeleton from './BaseSkeleton'
import { shallowMount } from '@vue/test-utils'

describe('BaseSkeleton.vue', () => {
  it('BaseSkeleton - SHOULD be a valid Vue component', () => {
    expect(BaseSkeleton).toBeAValidComponent()
  })

  it('computed getWidth - SHOULD return a normalized width in px', () => {
    const wrapper = shallowMount(BaseSkeleton, {
      stubs: ['VueSkeletonLoader'],
      propsData: {
        width: 10,
      },
    })

    expect(wrapper.vm.getWidth).toEqual('10px')
  })

  it('computed getWidth - SHOULD return a normalized width in percentage', () => {
    const wrapper = shallowMount(BaseSkeleton, {
      stubs: ['VueSkeletonLoader'],
      propsData: {
        width: '100%',
      },
    })

    expect(wrapper.vm.getWidth).toEqual('100%')
  })

  it('computed getHeight - SHOULD return a normalized height in px', () => {
    const wrapper = shallowMount(BaseSkeleton, {
      stubs: ['VueSkeletonLoader'],
      propsData: {
        height: 10,
      },
    })

    expect(wrapper.vm.getHeight).toEqual('10px')
  })

  it('computed getHeight - SHOULD return a normalized height in percentage', () => {
    const wrapper = shallowMount(BaseSkeleton, {
      stubs: ['VueSkeletonLoader'],
      propsData: {
        height: '100%',
      },
    })

    expect(wrapper.vm.getHeight).toEqual('100%')
  })
})
