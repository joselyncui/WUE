// pages/home/home.js

var app = getApp();
Page({

  data: {
    pageInfo: null
  },

  onLoad: function () {
    let wue = app.wue(this);
    this.$wueNavigationTab = wue.$wueNavigationTab;
    this.$wueComponentIndex = wue.$wueComponentIndex;
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
        });
        that.$wueNavigationTab.show(that.data.pageInfo.navChannel);
        that.$wueComponentIndex.show(that.data.pageInfo.materialList);
      },
      fail: function (error) {
        console.log('error = ' + error);
      }
    });
  }
})