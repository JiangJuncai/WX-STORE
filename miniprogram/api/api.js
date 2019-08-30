const BASE_URL = 'https://www.easy-mock.com/mock/5d67e5113074153fdc89c5bc/example'

const request = (url, options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}${url}`,
      method: options.method,
      data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
      header: {
        Accept: 'application/json',
        'content-type': 'application/json; charset=UTF-8',
        Authorization: null
      },
      success(res) {
        if (res.data.success) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      },
      fail(error) {
        reject(error.data)
      }
    })
  })
}

const get = (url, options = {}) => {
  return request(url, { method: 'GET', data: options })
}

const post = (url, options = {}) => {
  return request(url, { method: 'POST', data: options })
}

const put = (url, options = {}) => {
  return request(url, { method: 'PUT', data: options })
}

const remove = (url, options = {}) => {
  return request(url, { method: 'DELETE', data: options })
}

module.exports = {
  get,
  post,
  put,
  remove
}
