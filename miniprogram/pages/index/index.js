//index.js
const app = getApp()

Page({
  data: {
    imgUrls: ['../../images/swiper1.jpg', '../../images/swiper2.jpg', '../../images/swiper3.jpg']
  },
  onLoad: function() {},
  goLocation: function() {
    wx.navigateTo({
      url: '../location/location'
    })
  },
  makePhoneCall: function() {
    wx.makePhoneCall({
      phoneNumber: '18655329580'
    })
  },
  goOrderPage: function() {
    wx.switchTab({
      url: '../order/order'
    })
  },
  goPayPage: function() {
    wx.navigateTo({
      url: '../pay/pay'
    })
  },
  goCouponPage: function() {
    wx.navigateTo({
      url: '../coupon/coupon'
    })
  },
  goFoodMenuPage: function() {
    wx.navigateTo({
      url: '../foodMenu/foodMenu'
    })
  }
})
