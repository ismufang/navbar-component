App({
  globalData:{
    statusBarHeight: 0, //顶部状态栏高度
    navbarHeight: 0 //导航栏高度
  },
  onLaunch: function (options) {
    // 判断是否由分享进入小程序
    if (options.scene == 1007 || options.scene == 1008) {
      this.globalData.share = true
    } else {
      this.globalData.share = false
    }

    //设置导航栏高度
    this.setNavbarH()
  },

  //设置导航栏高度
  setNavbarH() {
    let statusBarHeight;
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.statusBarHeight = res.statusBarHeight;
        statusBarHeight = res.statusBarHeight;
      }
    });

    let rigthBtnH = wx.getMenuButtonBoundingClientRect().height; //获取胶囊高度
    let rigthBtnT = wx.getMenuButtonBoundingClientRect().top; //获取胶囊顶部距离
    this.globalData.navbarHeight = rigthBtnH + (rigthBtnT - statusBarHeight) * 2 + statusBarHeight;
  },
})
