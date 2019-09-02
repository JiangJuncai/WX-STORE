import api from './api'

const getCoupons = function() {
  return api.get('/coupons')
}

module.exports = {
  getCoupons
}
