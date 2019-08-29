// miniprogram/pages/pay/pay.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showRMB: 0
  },
  watchRMB: function(e) {
    this.setData({
      showRMB: e.detail.value
    })
  },
  paymoney: function() {
    console.log(this.data.showRMB)
  }
})
