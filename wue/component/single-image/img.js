// wue/component/single-img/img.js
import Component from '../../base/component';

class SingleImage extends Component {

  constructor(options) {
    super(Object.assign({}, options));
    // this.page.setData({
    //   "__singleImage__.height": "10rpx",
    //   "__singleImage__.item": null
    // });
    this.page.tapComponentSingleImage = this.tapComponentSingleImage;
  }

  show(data) {
    if (data.materialType == 0) {
      let ratio = data.ratio;
      let height = (ratio * getApp().globalData.systemInfo.screenWidth) + 'px';
      this.page.setData({
        "__singleImage__": data,
        "__singleImage__.height": height
      });
    }
  }

  process(data) {
    if (data.materialType == 0) {
      let ratio = data.ratio;
      let height = (ratio * getApp().globalData.systemInfo.screenWidth) + 'px';
      data['height'] = height;
      return data;
    }
  }

  tapComponentSingleImage(e) {
    console.log('[SingleImage] tap = ' + JSON.stringify(e));
  }
}
export default SingleImage;