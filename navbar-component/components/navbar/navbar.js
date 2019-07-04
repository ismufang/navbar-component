// components/navbar/navbar.js
const app = getApp();
Component({
  properties: {
    title:{
      type: String,
      value:'' //导航栏 中间的标题
    },

    showCapsule:{
      type:Number,
      value:1 //是否显示左上角图标   1表示显示    0表示不显示
    },

  },
  data: {
    navbarHeight: 0,
    statusBarHeight: 0,
    share: false
  },

  attached: function () {
    // 获取是否是通过分享进入的小程序，分享进入不显示返回按钮
    this.setData({
      share: app.globalData.share
    });
    // 定义导航栏的高度   方便对齐
    this.setData({
      statusBarHeight: app.globalData.statusBarHeight,
      navbarHeight:app.globalData.navbarHeight
    })
  },
  methods: {

    // 返回上一页面
    _navback() {
      wx.navigateBack()
    },
    //返回到首页
    _backhome() {
      wx.navigateTo({
        url: '/pages/index/index',
      })
    }
  }

});