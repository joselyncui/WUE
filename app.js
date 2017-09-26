//app.js
import wue from './wue/wue';
import getServices from './config/server';

App({
  // 通用组件
  wue,

  // 获取服务真实接口地址
  getServices,

  onLaunch: function() {
    this.getSystemInfo();

    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  getSystemInfo: function() {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.systemInfo = res;
      }
    });
  },

  globalData: {
    userInfo: null,
    systemInfo: null
  }
})
