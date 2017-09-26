//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    pageInfo: null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let wue = app.wue(this);
    this.$wueNavigationTab = wue.$wueNavigationTab;
    this.$wueBanner = wue.$wueBanner;
    this.$wueSingleImage = wue.$wueSingleImage;
    this.$wueMultiImage = wue.$wueMultiImage;
    this.$wueNormalGroupGoods = wue.$wueNormalGroupGoods;

    console.log('onLoad');
    this.getPageInfo();
  },

  getPageInfo: function () {
    let that = this;
    wx.request({
      url: app.getServices('mengdianApp/getPageInfo'),
      data: {
        "pageSize": 20,
        "BaseAppVersion": "4.9.0",
        "channel": "AppBuyerHome",
        "_sign_": "95BB77B1CB9A39DBF32AF8EC4C65EFE5",
        "hardware": "iPhone8,2",
        "SystemVersion": "10.3.3",
        "appIdentifier": "com.hs.yjseller",
        "spreadChannel": "app store",
        "BaseAppType": "ios",
        "page": 1
      },
      method: "POST",
      success: function (response) {
        that.setData({
          pageInfo: response.data.data
        })
        that.$wueNavigationTab.show(that.data.pageInfo.navChannel);
        that.$wueBanner.show(that.data.pageInfo.materialList[0]);
        that.$wueMultiImage.show(that.data.pageInfo.materialList[1]);
        that.$wueSingleImage.show(that.data.pageInfo.materialList[2]);
        that.$wueNormalGroupGoods.show(that.data.pageInfo.materialList[3]);
      },
      fail: function (error) {
        console.log('error = ' + error);
      }
    });
  }
})
