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
  payMoney: function() {
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success: function(res) {
        console.log(123)
      },
      fail: function(res) {
        console.log(444)
      },
      complete: function(res) {}
    })
  }
})
