// pages/cart/cart.js
const app = getApp();
const util = require('../../utils/util');
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
    editAble: false,
    isAllSelect: false,
    totalMoney: 0,
    // 商品详情介绍
    cartItems: [{
        skuId: 434792847923,
        pic: "https://pub-img.perfectdiary.com/material/image/2020/04/074ecc385c9745f5af0d34658f138c86.jpg",
        name: "【第2件半价】【完美日记】 「小黑钻」倾色慕光唇膏",
        price: 59.90,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 2,
          min: 1,
          max: 20
        },
      },
      {
        skuId: 532532532523,
        pic: 'https://pub-img.perfectdiary.com/material/image/2020/04/074ecc385c9745f5af0d34658f138c86.jpg',
        name: "【第2件半价】【完美日记】 「小黑钻」倾色慕光唇膏",
        price: 59.90,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 1,
          min: 1,
          max: 20
        },
      },
      {
        skuId: 7984414156,
        pic: 'https://pub-img.perfectdiary.com/material/image/2020/04/074ecc385c9745f5af0d34658f138c86.jpg',
        name: "【第2件半价】【完美日记】 「小黑钻」倾色慕光唇膏",
        price: 59.90,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 3,
          min: 1,
          max: 20
        },
      },
      {
        skuId: 584357438957,
        pic: 'https://pub-img.perfectdiary.com/material/image/2020/04/074ecc385c9745f5af0d34658f138c86.jpg',
        name: "【第2件半价】【完美日记】 「小黑钻」倾色慕光唇膏",
        price: 59.90,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 1,
          min: 1,
          max: 20
        },
      },
      {
        skuId: 8609438690423,
        pic: 'https://pub-img.perfectdiary.com/material/image/2020/04/074ecc385c9745f5af0d34658f138c86.jpg',
        name: "【第2件半价】【完美日记】 「小黑钻」倾色慕光唇膏",
        price: 59.90,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 10,
          min: 1,
          max: 20
        },
      },
      {
        skuId: 859048325954,
        pic: "https://pub-img.perfectdiary.com/material/image/2020/04/074ecc385c9745f5af0d34658f138c86.jpg",
        name: "【第2件半价】【完美日记】 「小黑钻」倾色慕光唇膏",
        price: 59.90,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 1,
          min: 1,
          max: 20
        },
      },
    ],
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
  onEdit: function (e) {
    var edit = this.data.editAble;
    this.setData({
      editAble: !edit
    })
  },
  onSelectAllChange: function(e) {
    var value = e.detail.value[0];
    var totalMoney = 0;
    if (value && value != undefined && value != '') {
      this.data.cartItems.forEach(item=>{
        totalMoney += util.add(totalMoney, util.mul(item.price, item.num));
      });
    }
    this.setData({
      totalMoney: totalMoney
    })
  },
  onSelectAll: function(e) {
    this.data.cartItems.forEach(item=>{
      item.isSelect = !this.data.isAllSelect;
    })
    this.setData({
      isAllSelect: !this.data.isAllSelect,
      cartItems: this.data.cartItems
    });
    this.calcTotalMoney();
    this.calcCheckedNum();
  },
  calcCheckedNum: function() {
    var checkedNum = 0;
    this.data.cartItems.forEach(item=>{
      if (item.isSelect) {
        checkedNum++;
      }
    });
    this.setData({
      checkedNum: checkedNum,
      isAllSelect: checkedNum == this.data.cartItems.length
    })
  },
  calcCartNum: function() {
    var cartItemCount = this.data.cartItems.length;
    if (cartItemCount && cartItemCount > 0) {
      wx.setTabBarBadge({//tabbar右上角添加文本
        index: 2, //tabbar下标
        text: '' + cartItemCount //显示的内容
      });
    } else {
      wx.removeTabBarBadge({
        index: 2,
      })
    }
  },
  calcTotalMoney: function() {
    var totalMoney = 0;
    this.data.cartItems.forEach(item=>{
      if (item.isSelect) {
        totalMoney = util.add(totalMoney, util.mul(item.price, item.count.quantity));
      }
    });
    this.setData({
      totalMoney: totalMoney
    })
  },
  onIncrement: function(e) {
    var that = this,
    skuId = e.target.dataset.skuid;
    that.data.cartItems.forEach(function (v, i) {
      if (v.skuId == skuId) {
        v.count.quantity++;
      }
    })

    this.setData({
      cartItems: this.data.cartItems
    })
    this.calcCartNum();
    this.calcTotalMoney();
    this.calcCheckedNum();
  },
  onDecrease: function(e) {
    console.log(e);
    var that = this,
    flag = false,
    skuId = e.target.dataset.skuid;
    that.data.cartItems.forEach(function (v, i) {
      if (v.skuId == skuId) {
          var num = v.count.quantity - 1;
          if (num < 1) {
            wx.showModal({
              title: '确认删除',
              content: '您确定要删除商品吗？',
              success: function(e) {
                if (e.confirm) {
                  that.data.cartItems.splice(i, 1)
                  that.setData({
                    cartItems: that.data.cartItems
                  })
                  flag = true;
                  that.calcCartNum();
                  that.calcTotalMoney();
                  this.calcCheckedNum();
                }
              }
            })
          } else {
            v.count.quantity--;
            flag = true;
          }
      }
    })

    if (flag) {
      this.setData({
        cartItems: this.data.cartItems
      })
      this.calcCartNum();
      this.calcCheckedNum();
      this.calcTotalMoney();
    }
  },

  onItemSelect: function(e) {
    var that = this,
    skuId = e.target.dataset.skuid;
    that.data.cartItems.forEach(function (v, i) {
      if (v.skuId == skuId) {
          v.isSelect = !v.isSelect;
      }
    })

    this.setData({
      cartItems: this.data.cartItems
    })
    that.calcCartNum();
    this.calcTotalMoney();
    this.calcCheckedNum();
  },
  onItemDelete: function(e) {
    var that = this,
    index = e.detail.itemId;//当前索引
    that.data.cartItems.forEach(function (v, i) {
      if (v.itemId == index) {
        that.data.cartItems.splice(i, 1)
        that.setData({
          cartItems: that.data.cartItems
        })
        wx.showToast({
          title: '商品已删除！',
          icon: 'success'
        })
        that.calcCartNum();
        that.calcTotalMoney();
        this.calcCheckedNum();
      }
    })
  },
  onDeleteSelectItem: function() {
    var that = this,
    checkedArr = [];

    this.data.cartItems.forEach(function (item, i) {
      if (item.isSelect) {
        checkedArr.push(item.skuId);
      }
    });

    checkedArr.forEach(skuId=>{
      that.data.cartItems.forEach(function (item, index) {
        if (item.skuId == skuId) {
          that.data.cartItems.splice(index, 1);
        }
      })
    });

    this.setData({
      cartItems: that.data.cartItems
    })
    this.calcCheckedNum();
    this.calcCartNum();
  },
  toCheckout: function(e) {
    if (this.data.checkedNum > 0) {
      wx.navigateTo({
        url: '/pages/checkout/main',
      })
    }
  }
})