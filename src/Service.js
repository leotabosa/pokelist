import api from './api'

class Service {
  constructor({ path, resourceName } = {}) {
    this.path = path
    this.resourceName = resourceName
  }

  async get({ offset = 0, limit = 10 } = {}) {
    api.defaults.headers.resource = this.resourceName
    const response = await api.get(this.path, {
      params: {
        offset,
        limit,
      },
    })

    return response.data
  }

  async getById({ offset = 0, limit = 10, id = '' } = {}) {
    api.defaults.headers.resource = this.resourceName
    const response = await api.get(`${this.path}/${id}`, {
      params: {
        offset,
        limit,
      },
    })

    return response.data
  }
}

export default Service
