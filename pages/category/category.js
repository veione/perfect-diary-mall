// pages/category/category.js
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
    curIndex: 0,
    detail: [
      {"id": "1001", "title": "水果馆", "banner": "../../static/images/category/fruit.png", 
      productList: [
        {"thumb": "/static/images/product/20200609154125.jpg", "name": "苹果"},{},{},{},{},{}
      ]
    }
    ],
    "categoryList": [
      {
          "title": "重磅新品",
          "subCategoryList": [
              {
                  "title": "「天鹅绒」唇釉",
                  "type": 1,
                  "link": 7793030013397712,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/e82bee21dce3423784cc7262ab98790e.jpg"
              },
              {
                  "title": "mini丝绒唇釉套盒",
                  "type": 1,
                  "link": 523045176056608,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/05/a162d2eeb24a47649fbf2eca3473407a.jpg"
              },
              {
                  "title": "锦鲤套组",
                  "type": 1,
                  "link": 523030412093573,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/05/8b75f170f5044d49b833d319b7b63fe6.jpg"
              },
              {
                  "title": "三丽鸥联名散粉",
                  "type": 1,
                  "link": 8325791449325324,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/05/04ef198a87624214b064ac8bc3018577.jpg"
              },
              {
                  "title": "「小枪管」眼线液笔",
                  "type": 1,
                  "link": 7793030281831089,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/202db72b94ea425e9198589cb58ea675.jpg"
              },
              {
                  "title": "「奥利奥」气垫",
                  "type": 1,
                  "link": 7793042092994292,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/5a8c5decf1f545888b92c59d9571842a.jpg"
              }
          ],
          "isSw": true,
          "banner": {
              "title": "品牌故事",
              "type": 2,
              "link": 8976581806894167,
              "image_url": "https://pub-img.perfectdiary.com/material/image/2020/05/b539247d922a4010b38d416ae8da86ca.jpg"
          }
      },
      {
          "title": "唇妆",
          "subCategoryList": [
              {
                  "title": "哑光唇釉",
                  "type": 1,
                  "link": 5912673732482764,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/01/ae0fac2198344e6ebffd013755e8ed89.jpg"
              },
              {
                  "title": "水光唇釉",
                  "type": 1,
                  "link": 5969474406599098,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/01/87e267ef56644e4aa399780c2be5c44c.jpg",
                  "tag": "HOT"
              },
              {
                  "title": "「天鹅绒」唇釉",
                  "type": 1,
                  "link": 7793030013397712,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/e82bee21dce3423784cc7262ab98790e.jpg"
              },
              {
                  "title": "反重力唇釉",
                  "type": 1,
                  "link": 5969474406598571,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/247935aeee1d4c359b8f3440db750c9e.jpg"
              },
              {
                  "title": "小黑钻口红",
                  "type": 1,
                  "link": 5912673732483193,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/e6c9052d23fc4096957879da6cb70905.jpg"
              },
              {
                  "title": "小粉钻口红",
                  "type": 1,
                  "link": 5969474675033400,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/01/6d90f2cb26f54162b3793619117c8423.jpg"
              },
              {
                  "title": "小金钻口红",
                  "type": 1,
                  "link": 5969474406598403,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/ea5de9a196ab42aab9859a30028b289c.jpg"
              },
              {
                  "title": "mini哑光唇釉套组",
                  "type": 1,
                  "link": 5912673732485027,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/c1990f5901da4818bbc202e93e22fc7f.jpg"
              },
              {
                  "title": "mini小黑钻套组",
                  "type": 1,
                  "link": 5912674000918875,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/01/ce766c26b567410a9a146e3483fd4a76.jpg"
              },
              {
                  "title": "丝绒唇釉mini套组",
                  "type": 1,
                  "link": 523045176056608,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/05/a162d2eeb24a47649fbf2eca3473407a.jpg"
              },
              {
                  "title": "唇线笔",
                  "type": 1,
                  "link": 5969474675035764,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/c7c698e1baaf4dc1a6a1f48db7742544.png"
              },
              {
                  "title": "润唇膏",
                  "type": 1,
                  "link": 5969474406600492,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/14bea33852bc4aa08aa39e4c0101baaf.jpg"
              },
              {
                  "title": "唇部打底",
                  "type": 1,
                  "link": 5912674000918089,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/ecf889807d434b1c8972d21c1041d84f.jpg"
              }
          ],
          "isSw": true,
          "banner": {
              "title": "",
              "type": "",
              "link": "",
              "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/1867e53de807414ebd8d71627c5a6a17.jpg"
          }
      },
      {
          "title": "眼妆",
          "subCategoryList": [
              {
                  "title": "眼影",
                  "type": 2,
                  "link": 7624217934173820,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/3785b76945ba4db28ae81ae938963120.jpg"
              },
              {
                  "title": "眉部产品",
                  "type": 2,
                  "link": 7624073515869374,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/9a8a2cc165814a81be2a1ecd9dea98b5.png"
              },
              {
                  "title": "睫毛",
                  "type": 2,
                  "link": 7624087206079378,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/ac5119c8425542728a9613028eec7728.png"
              },
              {
                  "title": "眼线",
                  "type": 2,
                  "link": 7624226524109418,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/d23e2b86e19e4644b7d82d6be4a7223c.jpg"
              }
          ],
          "isSw": false,
          "banner": {
              "title": "",
              "type": "",
              "link": "",
              "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/13036090ddce49b5bd90400a6c114e57.jpg"
          }
      },
      {
          "title": "底妆",
          "subCategoryList": [
              {
                  "title": "粉底/气垫",
                  "type": 2,
                  "link": 7624217665737387,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/15e1056dc8f948b78e855057fa0a669f.jpg"
              },
              {
                  "title": "粉饼/散粉",
                  "type": 2,
                  "link": 7624217665737150,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/4e4b3c6d69e0499d8458844762bae5b2.png"
              },
              {
                  "title": "隔离/妆前",
                  "type": 2,
                  "link": 7624064389065081,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/fd7d05566db247a1b10fbb7b2006eb2e.png"
              },
              {
                  "title": "遮瑕",
                  "type": 2,
                  "link": 7624064657501434,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/aad6ed95edf5427c9cc3555541cee73f.png"
              },
              {
                  "title": "修颜",
                  "type": 2,
                  "link": 7624217665737973,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/99294b7dfac24704b7ad103e0748805c.jpg"
              },
              {
                  "title": "定妆喷雾",
                  "type": 1,
                  "link": 5969474943468603,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/e27d4d5aac3c45deaae8fbfd7abbd2dd.jpg"
              }
          ],
          "isSw": false,
          "banner": {
              "title": "",
              "type": "",
              "link": "",
              "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/ab5d1edceecc466d9e4d69c2970fe771.jpg"
          }
      },
      {
          "title": "清洁",
          "subCategoryList": [
              {
                  "title": "卸妆水",
                  "type": 1,
                  "link": 7793089337631503,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/01/055d0493ce62462eadf669fd28066222.jpg"
              },
              {
                  "title": "化妆棉230片",
                  "type": 1,
                  "link": 5912674000918832,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/c4c35351a5784683afc7473bbe6bc3f2.jpg"
              },
              {
                  "title": "卸妆精华啫喱",
                  "type": 1,
                  "link": 5969474406597394,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/cb1d3ab2331947f19a332a4ca15d6099.png"
              },
              {
                  "title": "卸妆湿巾",
                  "type": 1,
                  "link": 5912673732483695,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/a0a7441758b14a4897fcee56e31123f4.png"
              },
              {
                  "title": "洁面棉柔巾",
                  "type": 1,
                  "link": 5912674000917848,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/931a0d0035664c32b810939cf568f6e2.png"
              }
          ],
          "isSw": false,
          "banner": {
              "title": "",
              "type": "",
              "link": "",
              "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/945f7cbe71224171851cf5231ae1de83.jpg"
          }
      },
      {
          "title": "护肤",
          "subCategoryList": [
              {
                  "title": "洁面",
                  "type": 2,
                  "link": 7624073515869876,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/945af1a3b856419095e3e0ec3cea87b8.png"
              },
              {
                  "title": "面膜",
                  "type": 2,
                  "link": 7624073515870704,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/8add3e4960024063b967c129bcfff575.png"
              },
              {
                  "title": "精华/水乳",
                  "type": 2,
                  "link": 7624239945883625,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/b5e6ea683789481fb863a9d059fc1f0e.png"
              }
          ],
          "isSw": false,
          "banner": {
              "title": "",
              "type": "",
              "link": "",
              "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/2a2045d690b64f418987e06e24fce1d8.jpg"
          }
      },
      {
          "title": "礼盒",
          "subCategoryList": [
              {
                  "title": "体验礼盒",
                  "type": 1,
                  "link": 7792942771873074,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/a3b3f9ed721f48cfb1d165ec41cc761b.jpg"
              },
              {
                  "title": "哑光唇釉迷你6支装",
                  "type": 1,
                  "link": 5912673732485027,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/c1990f5901da4818bbc202e93e22fc7f.jpg"
              },
              {
                  "title": "小黑钻迷你6支装",
                  "type": 1,
                  "link": 5912674000918875,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/f401cb8680ff46c4bfc3bce53a1dca0e.jpg"
              },
              {
                  "title": "mini香水礼盒",
                  "type": 1,
                  "link": 7794038525456152,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/968805b4ed004f80893bf0c01056d528.png"
              },
              {
                  "title": "三周年献礼",
                  "type": 1,
                  "link": 8325805944843451,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/05/aa7f23aee66641d4a93f23e136df9be5.jpg"
              },
              {
                  "title": "38女王节礼盒",
                  "type": 1,
                  "link": 8325792791500277,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/05/860e68caf1a542c990550637d55ab225.jpg"
              }
          ],
          "isSw": false,
          "banner": {
              "title": "",
              "type": "",
              "link": "",
              "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/c41bf4b9b3044153ad23afe73d7cbb86.jpg"
          }
      },
      {
          "title": "香水",
          "subCategoryList": [
              {
                  "title": "浮光香水",
                  "type": 1,
                  "link": 5912674806222913,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/01a2259bb29b4b839b13a0a1d33768dc.png"
              },
              {
                  "title": "香水套盒",
                  "type": 1,
                  "link": 7794038525456152,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/b9162636267c47828f290c8879d46162.jpg"
              }
          ],
          "isSw": true,
          "banner": {
              "title": "",
              "type": "",
              "link": "",
              "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/72f1160b2d5f47d49d22c5feecca432c.jpg"
          }
      },
      {
          "title": "工具",
          "subCategoryList": [
              {
                  "title": "工具",
                  "type": 2,
                  "link": 7624239945883108,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/a76229986acf4d31a9d00b51136bdc83.png"
              },
              {
                  "title": "化妆刷",
                  "type": 2,
                  "link": 7624086937644812,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/ff2dff0059204d5eb8f4e59d1b1856a7.png"
              }
          ],
          "isSw": false,
          "banner": {
              "title": "",
              "type": "",
              "link": "",
              "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/aaaec103724048cc9bc210910ec6294c.jpg"
          }
      },
      {
          "title": "99选3",
          "subCategoryList": [
              {
                  "title": "哑光唇釉",
                  "type": 1,
                  "link": 5912673732482764,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/05/2a468b824a6647909bb11c77ac1e717b.jpg"
              },
              {
                  "title": "睫毛膏",
                  "type": 1,
                  "link": 5912673732482583,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/05/236a25f04d7e495fb592936e635904cd.jpg"
              },
              {
                  "title": "眼线液笔",
                  "type": 1,
                  "link": 5969474406597339,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/05/84165dfdf6714d0ca0823200344e30f8.jpg"
              },
              {
                  "title": "气垫替换装",
                  "type": 1,
                  "link": 5969496149869160,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/0b2c2ee1711142af8941f44f469aa88e.jpg"
              },
              {
                  "title": "睫毛打底",
                  "type": 1,
                  "link": 5969474406598786,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/05/618b22aba1204551a6fcd9a67c9ef389.jpg"
              },
              {
                  "title": "单色腮红",
                  "type": 1,
                  "link": 5912674000917530,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/7bdb13e92b784e8da6aedc178eda3293.jpg",
                  "tag": "99选3"
              },
              {
                  "title": "双头细芯眉笔",
                  "type": 1,
                  "link": 5912674000917471,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/9aedbf8ff3df4877b73b4b80b1dfff70.jpg",
                  "tag": "99选3"
              },
              {
                  "title": "唇部打底",
                  "type": 1,
                  "link": 5912674000918089,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/ef1f94ec331d4a35bf51d74eb458d4e8.jpg",
                  "tag": "99选3"
              },
              {
                  "title": "单色修容",
                  "type": 1,
                  "link": 5912674000917705,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/0a7cd7b70eb8492bad570167a55d6952.jpg",
                  "tag": "99选3"
              },
              {
                  "title": "双色腮红膏",
                  "type": 1,
                  "link": 5912674806223248,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/05/7201371d3b6143a19dcd438e20b486e3.jpg"
              },
              {
                  "title": "卸妆湿巾",
                  "type": 1,
                  "link": 5912673732483695,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/1f8c2653768b41208e024666327cea84.jpg",
                  "tag": "99选3"
              },
              {
                  "title": "高光粉饼",
                  "type": 1,
                  "link": 5969474406597170,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/05/6ff58f08ea044bad8174eca978e0960b.jpg"
              },
              {
                  "title": "双头六角眉笔",
                  "type": 1,
                  "link": 5912674806223360,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/9865e38dbef248599a774a076fdc142e.jpg",
                  "tag": "99选3"
              },
              {
                  "title": "眼线胶笔",
                  "type": 1,
                  "link": 5912673732484684,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/5835d208890e41d196d0a4fbc1d0c994.jpg",
                  "tag": "99选3"
              },
              {
                  "title": "化妆棉",
                  "type": 1,
                  "link": 5969474406598069,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/3c4967fd54f0402dbcc573488a276cc0.jpg",
                  "tag": "99选3"
              },
              {
                  "title": "眼唇卸妆液",
                  "type": 1,
                  "link": 5912673732483396,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/cf69fc08889c42cea00cc668e70cc3f0.jpg",
                  "tag": "99选3"
              },
              {
                  "title": "化妆工具清洁剂",
                  "type": 1,
                  "link": 5969474943468643,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/17d31bbb2fce497bb9368d4284a3e95d.jpg",
                  "tag": "99选3"
              },
              {
                  "title": "双头卧蚕笔",
                  "type": 1,
                  "link": 5969474406597113,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/03/2244f37f584844d08041663c19da283b.jpg"
              },
              {
                  "title": "遮瑕膏",
                  "type": 1,
                  "link": 8325791449323844,
                  "image_url": "https://pub-img.perfectdiary.com/material/image/2020/05/2d803f0073b54636a99ed560f9fc87ae.jpg"
              }
          ],
          "isSw": true,
          "banner": {
              "title": "",
              "type": "",
              "link": "",
              "image_url": "https://pub-img.perfectdiary.com/material/image/2020/04/d321466187fc484d8865825ef4314c9b.jpg"
          }
      }
  ]
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
  switchCategory: function(e) {
      var index = e.currentTarget.dataset.index;
      this.setData({
          curIndex: index
      })
  }
})