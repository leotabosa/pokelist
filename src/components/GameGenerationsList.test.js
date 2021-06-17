import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import GameGenerationsList from '@/components/GameGenerationsList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('GameGenerationsList.vue', () => {
  let actions
  let store
  beforeEach(() => {
    actions = {
      addNewError: jest.fn(),
    }
    store = new Vuex.Store({
      actions,
    })
  })

  it('GameGenerationsList - SHOULD be a valid Vue component', () => {
    expect(GameGenerationsList).toBeAValidComponent()
  })

  it('method fetchGenerations - SHOULD dispatch addNewError action if the request fails', () => {
    const getMock = jest.fn(() => {
      throw new Error()
    })
    const wrapper = shallowMount(GameGenerationsList, {
      localVue,
      store,
      data() {
        return {
          service: { get: getMock },
          loading: true,
        }
      },
    })

    expect(getMock).toHaveBeenCalled()
    expect(actions.addNewError).toHaveBeenCalled()
    expect(wrapper.vm.loading).toBe(false)
  })

  it('method fetchGenerations - SHOULD request generations and map to data', () => {
    const getMock = jest.fn(() => ({
      results: [
        {
          name: 'generation-vii',
          url: 'testing/8/',
        },
      ],
    }))

    const wrapper = shallowMount(GameGenerationsList, {
      localVue,
      store,
      data() {
        return {
          service: { get: getMock },
          loading: true,
          items: [],
        }
      },
    })

    expect(getMock).toHaveBeenCalled()
    expect(getMock).toHaveBeenCalledWith({ offset: 0, limit: 100 })

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.items).toEqual([
        { name: 'Generation VII', number: 'VII', id: 8, url: 'testing/8/' },
      ])
      expect(wrapper.vm.loading).toBe(false)
    })
  })

  it('method goToGenerationDetails - SHOULD navigate to generations detail', () => {
    const pushMock = jest.fn()
    const getMock = jest.fn(() => ({ results: [] }))
    const wrapper = shallowMount(GameGenerationsList, {
      localVue,
      store,
      mocks: { $router: { push: pushMock } },
      data() {
        return {
          service: { get: getMock },
        }
      },
    })

    wrapper.vm.goToGenerationDetails({ id: 1 })
    expect(pushMock).toHaveBeenCalled()
    expect(pushMock).toHaveBeenCalledWith({
      name: 'Generation',
      params: {
        id: 1,
      },
    })
  })
})
