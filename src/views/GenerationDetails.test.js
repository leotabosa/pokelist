import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import GenerationDetails from './GenerationDetails.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const routeMock = {
  params: {
    id: 1,
  },
}

describe('GenerationDetails.vue', () => {
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

  it('GenerationDetails - SHOULD be a valid Vue component', () => {
    expect(GenerationDetails).toBeAValidComponent()
  })

  it('method fetchGeneration - SHOULD dispatch addNewError action if the request fails', async () => {
    const getByIdMock = jest.fn(() => {
      throw new Error()
    })
    const wrapper = shallowMount(GenerationDetails, {
      localVue,
      store,
      mocks: { $route: routeMock },
      data() {
        return {
          service: { getById: getByIdMock },
          loading: true,
        }
      },
    })

    await wrapper.vm.fetchGeneration()
    expect(getByIdMock).toHaveBeenCalled()
    expect(actions.addNewError).toHaveBeenCalled()
    expect(wrapper.vm.loading).toBe(false)
  })

  it('method fetchGenerations - SHOULD request generation details and map to data', async () => {
    const getByIdMock = jest.fn(() => ({
      name: 'generation-vii',
      url: 'testing/8/',
    }))

    const wrapper = shallowMount(GenerationDetails, {
      localVue,
      store,
      mocks: { $route: routeMock },
      data() {
        return {
          service: { getById: getByIdMock },
          loading: true,
          data: {},
        }
      },
    })

    await wrapper.vm.fetchGeneration()
    expect(getByIdMock).toHaveBeenCalled()
    expect(getByIdMock).toHaveBeenCalledWith({ id: 1 })

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.data).toEqual({
        name: 'Generation VII',
        url: 'testing/8/',
      })
      expect(wrapper.vm.loading).toBe(false)
    })
  })

  it('method goBackToList - SHOULD go back to home page', async () => {
    const pushMock = jest.fn()
    const getByIdMock = jest.fn(() => ({
      name: 'generation-vii',
      url: 'testing/8/',
    }))
    const wrapper = shallowMount(GenerationDetails, {
      localVue,
      store,
      mocks: { $route: routeMock, $router: { push: pushMock } },
      data() {
        return {
          service: { getById: getByIdMock },
        }
      },
    })

    wrapper.vm.goBackToList()
    expect(pushMock).toHaveBeenCalled()
    expect(pushMock).toHaveBeenCalledWith({
      name: 'Home',
    })
  })
})
