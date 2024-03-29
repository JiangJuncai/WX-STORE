// miniprogram/pages/coupon/coupon.js
import { getCoupons } from '../../api/coupon'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    coupons: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getCoupons()
  },
  getCoupons: function() {
    getCoupons().then(res => {
      const data = res.data
      data.forEach(item => {
        item.start = item.startDate.split(' ')[0]
        item.end = item.endDate.split(' ')[0]
      })
      this.setData({
        coupons: data
      })
    })
  },
  receiveCoupon: function(e) {
    const coupons = this.data.coupons
    let id = e.currentTarget.dataset.id
    const index = coupons.findIndex(item => {
      return item.id === id
    })
    coupons[index].isGet = true
    this.setData({
      coupons: coupons
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
