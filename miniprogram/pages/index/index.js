//index.js
const app = getApp()

import { getRecommends } from '../../api/home'

Page({
  data: {
    imgUrls: ['../../images/swiper1.jpg', '../../images/swiper2.jpg', '../../images/swiper3.jpg'],
    recommends: [],
    isOpen: false
  },
  onLoad: function() {
    // 判断是否营业
    const nowHour = new Date().getHours()
    if (nowHour < 7 || nowHour > 21) {
      this.setData({
        isOpen: false
      })
      wx.showModal({
        title: '本店已打烊',
        content: '营业时间：07:00~21:00',
        showCancel: false,
        success(res) {}
      })
    }

    getRecommends()
      .then(res => {
        this.setData({
          recommends: res.data.recommends
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
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
