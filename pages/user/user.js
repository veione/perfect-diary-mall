// pages/user/user.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //从全局变量获取状态栏高度
    titleBarHeight: 0,
    navBarHeight: '64px',
    contentHeight: 0,
    windowWidth: 0,
    windowHeight: 0,
    windowRemainHeight: 0,
    navHeight: app.globalData.navHeight,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      windowHeight: wx.getSystemInfoSync().windowHeight,
      windowWidth: wx.getSystemInfoSync().windowWidth
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;
    var navBarHeight = 0;
    query.select('.navbar').boundingClientRect(function (rect) {
      navBarHeight = rect.height;
      that.setData({
        navBarHeight: navBarHeight + 'px',
        contentHeight: (that.data.windowHeight - navBarHeight) + 'px'
      })
    }).exec();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toAccountSetting: function() {
    wx.navigateTo({
      url: '/pages/account/setting/setting',
    })
  },
  toOrderPage: function(e) {
    const type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: '/pages/account/order/order?type=' + type
    })
  },
  toCouponPage: function() {
    wx.navigateTo({
      url: '/pages/account/coupon/coupon',
    })
  },
  toAddressPage: function() {
    wx.navigateTo({
      url: '/pages/account/address/address',
    })
  },
  onBindPhone: function() {
    console.log('绑定手机号')
  }
})