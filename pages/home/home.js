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
    this.$wueBubble = wue.$wueBubble;

    console.log('onLoad');
    this.setData({
      scrollViewHeight: (app.globalData.systemInfo.windowHeight - 32 - 50) + 'px'
    })
    this.getTabbar();
    this.getPageInfo();
    this.getBubble();
  },

  getTabbar: function() {
    let that = this;
    app.request({
      url: 'mengdianApp/getMdTabbar',
      data: {
        "_sign_": "CA88EF8B23F3824C1F11EDC80B6497D4",
      },
      success: function (response) {
        that.$wueTabbar.show(response.data.data);
      }
    })
  },

  getBubble: function() {
    let that = this;
    app.request({
      url: 'mengdianApp/getHomeRecommendBubble',
      data: {
        "_sign_": "28A97A58184039C5FD7DB3790EA380FF",
        "timeStamp": "2017-09-27T14:25:06.522Z"
      },
      success: function (response) {
        that.$wueBubble.show(response.data.data);
      }
    })
  },

  getPageInfo: function () {
    let that = this;
    app.request({
      url: 'mengdianApp/getPageInfo',
      data: {
        "pageSize": 20,
        "channel": "AppBuyerHome",
        "_sign_": "95BB77B1CB9A39DBF32AF8EC4C65EFE5",
        "page": this.customData.page
      },
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
      complete: function(){
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