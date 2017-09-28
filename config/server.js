const BASE_URL = 'https://api.vd.cn/';

const postData = {
  "BaseAppVersion": "4.10.0",
  "hardware": "iPhone8,2",
  "SystemVersion": "11.0",
  "appIdentifier": "com.hs.yjseller",
  "spreadChannel": "WxSmallApp",
  "BaseAppType": "ios"
}

function getServices(relativeUrl) {
  return BASE_URL + relativeUrl;
}

function request(obj) {
  let data = postData;
  for(let key in obj.data) {
    if(obj.data.hasOwnProperty(key)) {
      data[key] = obj.data[key];
    }
  }

  wx.request({
    url: getServices(obj.url),
    data: data,
    method: "POST",
    success: function (response) {
      obj.success(response);
    },
    fail: function (error) {
      console.log('error = ' + error);
      if (obj.hasOwnProperty('fail')) {
        obj.fail(error);
      }
    },
    complete: function (){
      if (obj.hasOwnProperty('complete')) {
        obj.complete();
      }
    }
  });
}

export default request;