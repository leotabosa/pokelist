import { shallowMount } from '@vue/test-utils'
import GenerationDetailsMovesList from './GenerationDetailsMovesList.vue'

jest.useFakeTimers()

describe('GenerationDetailsMovesList.vue', () => {
  it('GenerationDetailsMovesList - SHOULD be a valid Vue component', () => {
    expect(GenerationDetailsMovesList).toBeAValidComponent()
  })

  it('GenerationDetailsMovesList - SHOULD define default props', () => {
    const wrapper = shallowMount(GenerationDetailsMovesList)
    expect(wrapper.vm.moves).toStrictEqual([])
    expect(wrapper.vm.loading).toBe(false)
  })

  it('computed movesMapped - SHOULD return the full list if no filter is set', () => {
    const wrapper = shallowMount(GenerationDetailsMovesList, {
      propsData: {
        moves: [{ name: 'should pass 1' }, { name: 'should pass 2' }],
      },
    })

    expect(wrapper.vm.movesMapped).toEqual([
      { name: 'should pass 1' },
      { name: 'should pass 2' },
    ])
  })

  it('computed movesMapped - SHOULD return the filtered list if a filter is set', () => {
    const wrapper = shallowMount(GenerationDetailsMovesList, {
      propsData: {
        moves: [{ name: 'should pass 1' }, { name: 'should not pass 2' }],
      },
    })

    wrapper.setData({ filter: '1' })

    expect(wrapper.vm.movesMapped).toEqual([{ name: 'should pass 1' }])
  })

  it('method doFilter - SHOULD attribute the search term and call defineFilter after the timeout', () => {
    const defineFilterMock = jest.fn()
    const wrapper = shallowMount(GenerationDetailsMovesList)

    wrapper.vm.defineFilter = defineFilterMock
    wrapper.vm.doFilter('test')
    expect(wrapper.vm.searchTerm).toEqual('test')

    jest.runAllTimers()
    expect(defineFilterMock).toHaveBeenCalled()
    expect(defineFilterMock).toHaveBeenCalledWith('test')
  })

  it('method defineFilter - SHOULD attribute the filter in data if it is equal to the searchTerm', () => {
    const wrapper = shallowMount(GenerationDetailsMovesList, {
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
    const wrapper = shallowMount(GenerationDetailsMovesList, {
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
