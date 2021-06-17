import { shallowMount } from '@vue/test-utils'
import Header from './Header'

describe('GenerationDetailsHeader.vue', () => {
  it('SHOULD define default props', () => {
    const pushMock = jest.fn()
    const wrapper = shallowMount(Header, {
      mocks: {
        $router: {
          push: pushMock,
        },
      },
    })
    wrapper.vm.goToHome()
    expect(pushMock).toHaveBeenCalled()
  })
})
