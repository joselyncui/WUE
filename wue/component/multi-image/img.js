// wue/component/multi-image/img.js
import Component from '../../base/component';

class MultiImage extends Component {
  constructor(options) {
    super(Object.assign({}, options));
    // this.page.setData({
    //   "__multiImage__": null,
    //   "__multiImage__.width": "100rpx",
    //   "__multiImage__.height": "100rpx"
    // });
    this.page.tapComponentMultiImage = this.tapComponentMultiImage;
  }

  show(data) {
    if (data.materialType == 3) {
      let width = getApp().globalData.systemInfo.screenWidth / data.column;
      let height = width * data.ratio;

      this.page.setData({
        "__multiImage__": data,
        "__multiImage__.width": width + 'px',
        "__multiImage__.height": height + 'px'
      });
    }
  }

  /**
   * Called By wue.$wueComponentIndex
   */
  process(data) {
    if (data.materialType == 3) {
      let width = getApp().globalData.systemInfo.screenWidth / data.column;
      let height = width * data.ratio;
      data['width'] = width + 'px';
      data['height'] = height + 'px';
      return data;
    }
  }

  tapComponentMultiImage(e) {
    console.log('[tapComponentMultiImage] index = ' + e.currentTarget.dataset.index);
  }
}

export default MultiImage;