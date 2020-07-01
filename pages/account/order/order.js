// pages/account/order/order.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //从全局变量获取状态栏高度
    currentTab: 0,
    titleBarHeight: 0,
    navBarHeight: '64px',
    contentHeight: 0,
    windowWidth: 0,
    windowHeight: 0,
    windowRemainHeight: 0,
    navHeight: app.globalData.navHeight,
    tabbarItems: [
      {'id': 1001, 'name': '全部', 'type': 0},
      {'id': 1002, 'name': '代付款', 'type': 1},
      {'id': 1003, 'name': '代发货', 'type': 2},
      {'id': 1004, 'name': '代收货', 'type': 3},
      {'id': 1005, 'name': '退货/款', 'type': 4}
    ],
    orderList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      windowHeight: wx.getSystemInfoSync().windowHeight,
      windowWidth: wx.getSystemInfoSync().windowWidth,
      currentTab: options.type
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
  setTab: function(index) {
    this.setData({
      currentTab: index
    })  
  },
  swichNav: function(e) {
    this.setTab(e.currentTarget.dataset.index)    
  },
  bindNavChange: function(e) {
    this.setTab(e.detail.current)    
  },
})