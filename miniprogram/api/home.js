import { get } from './api'

const getRecommends = () => {
  return get('/recommends')
}

module.exports = {
  getRecommends
}
