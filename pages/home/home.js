// pages/home/home.js

var app = getApp();
Page({

  data: {
    pageInfo: null,
    scrollViewHeight: 0
  },

  onLoad: function () {
    let wue = app.wue(this);
    this.$wueNavigationTab = wue.$wueNavigationTab;
    this.$wueComponentIndex = wue.$wueComponentIndex;
    this.$wueTabbar = wue.$wueTabbar;

    console.log('onLoad');
    this.setData({
      scrollViewHeight: (app.globalData.systemInfo.windowHeight - 32 - 50) + 'px'
    })
    this.getTabbar();
    this.getPageInfo();
  },

  getTabbar: function() {
    let that = this;
    wx.request({
      url: app.getServices('mengdianApp/getMdTabbar'),
      data: {
        "_sign_": "CA88EF8B23F3824C1F11EDC80B6497D4",
        "BaseAppVersion": "4.10.0",
        "hardware": "iPhone8,2",
        "SystemVersion": "11.0",
        "appIdentifier": "com.hs.yjseller",
        "spreadChannel": "app store",
        "BaseAppType": "ios"
      },
      method: "POST",
      success: function (response) {
        that.$wueTabbar.show(response.data.data);
      },
      fail: function (error) {
        console.log('error = ' + error);
      },
    })
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
        "page": this.customData.page
      },
      method: "POST",
      success: function (response) {
        let pi = that.data.pageInfo;
        if (that.customData.page > 1) {
          pi.materialList.push(...response.data.data.materialList);
        } else {
          pi = response.data.data;
        }
        that.setData({
          pageInfo: pi
        });
        that.$wueNavigationTab.show(that.data.pageInfo.navChannel);
        that.$wueComponentIndex.show(that.data.pageInfo.materialList);
      },
      fail: function (error) {
        console.log('error = ' + error);
      },
      complete: function(){
        console.log('complete');
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      }
    });
  },

  onPullDownRefresh: function() {
    console.log('onPullDownRefresh');
    this.customData.page = 1;
    wx.showNavigationBarLoading();
    this.getPageInfo();
  },

  onReachBottom: function() {
    console.log('onReachBottom page = ' + this.customData.page);
    this.customData.page++;
    wx.showNavigationBarLoading();
    this.getPageInfo();
  },

  customData: {
    page: 1
  }
})