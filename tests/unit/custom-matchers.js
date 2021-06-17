const matchers = {}

const print = (that, options) => {
  return that.utils.printReceived(options)
}

matchers.toBeAValidComponent = function (options) {
  if (isValidComponent()) {
    return {
      message: () =>
        `esperava que ${print(this, options)} não fosse um componente Vue.`,
      pass: true,
    }
  } else {
    return {
      message: () =>
        `esperava que ${print(this, options)} fosse um componente Vue válido.`,
      pass: false,
    }
  }

  function isValidComponent() {
    return (
      options &&
      typeof options === 'object' &&
      typeof options.render === 'function'
    )
  }
}

global.expect.extend(matchers)
