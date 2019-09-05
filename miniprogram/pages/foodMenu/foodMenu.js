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
    cateTotal: {}, // 每个分类中选中商品的数量
    cartList: [],
    totalCount: 0, // 购买商品的总数
    totalPrice: 0
  },
  /**
   * 分类菜单切换
   * @param {Object} e
   */
  selectCate: function(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      currentIndex: index,
      currentMenu: this.data.categories[index]
    })
  },
  /**
   * 修改商品数量
   * @param {Object} e
   */
  changeCount: function(e) {
    const currentMenu = this.data.currentMenu
    const index = e.currentTarget.dataset.index
    let foodlist = this.data.foods
    const currentFood = foodlist[currentMenu][index]
    if (e.currentTarget.dataset.func === 'add') {
      currentFood.count += 1
    } else {
      currentFood.count -= 1
    }
    this.addToCart(currentFood)
    const count = this.refreshCateCount(foodlist[[currentMenu]])
    const ct = this.data.cateTotal
    ct[currentMenu] = count

    const tc = this.refreshTotalData()
    this.setData({
      foods: foodlist,
      cateTotal: ct
    })
  },
  /**
   * 刷新每个分类里已购商品的数量
   * @param {Array} arr
   */
  refreshCateCount: function(arr) {
    return arr.reduce((total, item) => {
      return total + item.count
    }, 0)
  },
  /**
   * 刷新所有已购商品的数量
   * @param {Array} arr
   */
  refreshTotalData: function() {
    const cartList = this.data.cartList
    const totalCount = cartList.reduce((total, item) => {
      return total + item.count
    }, 0)
    const totalPrice = cartList.reduce((total, item) => {
      return total + item.price * item.count
    }, 0)
    this.setData({
      totalCount: totalCount,
      totalPrice: totalPrice
    })
  },
  /**
   * 将商品添加到购物车
   * @param {Object} obj
   */
  addToCart: function(obj) {
    const cartList = this.data.cartList
    const index = cartList.findIndex(item => {
      return item.name === obj.name
    })
    if (index >= 0) {
      if (cartList[index].count === 0) {
        cartList.splice(index, 1)
      } else {
        cartList[index] = obj
      }
    } else {
      cartList.push(obj)
    }
    this.setData({
      cartList: cartList
    })
  },
  isSelected: function() {
    const cartList = this.data.cartList
    console.log(cartList)
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
