import api from './api'

const getFoods = () => {
  return api.get('/foods')
}

module.exports = {
  getFoods
}
