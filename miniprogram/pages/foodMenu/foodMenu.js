// miniprogram/pages/foodMenu/foodMenu.js
import { getFoods } from '../../api/foodmenu'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
    currentIndex: 0,
    currentMenu: '',
    foods: [],
    cateTotal: {} // 每个分类中选中商品的数量
  },
  selectCate: function(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      currentIndex: index,
      currentMenu: this.data.categories[index]
    })
  },
  changeCount: function(e) {
    const currentMenu = this.data.currentMenu
    const index = e.currentTarget.dataset.index
    let foodlist = this.data.foods
    if (e.currentTarget.dataset.func === 'add') {
      foodlist[currentMenu][index].count += 1
    } else {
      foodlist[currentMenu][index].count -= 1
    }
    const count = this.refreshCount(foodlist[[currentMenu]])
    const ct = this.data.cateTotal
    ct[currentMenu] = count
    this.setData({
      foods: foodlist,
      cateTotal: ct
    })
  },
  refreshCount: function(arr) {
    return arr.reduce((total, i) => {
      return total + i.count
    }, 0)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    getFoods()
      .then(res => {
        const cates = Object.keys(res.data.foods)
        let cateTotal = {}
        cates.forEach(item => {
          cateTotal[item] = 0
        })
        this.setData({
          foods: res.data.foods,
          categories: cates,
          cateTotal: cateTotal,
          currentMenu: cates[0]
        })
      })
      .catch(e => {
        console.log(e)
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
