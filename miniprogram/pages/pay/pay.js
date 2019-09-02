// miniprogram/pages/pay/pay.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showRMB: 0,
    inputValue: ''
  },
  watchRMB: function(e) {
    this.setData({
      showRMB: e.detail.value
    })
  },
  paymoney: function() {
    const rmb = this.data.showRMB
    wx.showModal({
      title: '确认支付',
      content: `确认支付${rmb}元？`,
      success: res => {
        if (res.confirm) {
          wx.showToast({
            title: '支付成功',
            icon: 'success',
            duration: 2000
          })
          this.setData({
            showRMB: 0,
            inputValue: ''
          })
        } else if (res.cancel) {
          wx.showToast({
            title: '支付取消',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  }
})
