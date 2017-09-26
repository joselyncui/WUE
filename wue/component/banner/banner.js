// banner.js
import Component from '../../base/component';

class Banner extends Component {

  constructor(options) {
    super(Object.assign({}, options));
    // this.page.setData({
    //   "__banner__.materialType": -1,
    //   "__banner__.banners": []
    // });
    this.page.tapComponentBanner = this.tapComponentBanner;
  }

  show(data) {
    let list = data.materialList;
    if (data.materialType == 13) {
      if (list instanceof Array) {
        let banners = [];
        list.forEach(banner => {
          banners.push(banner);
        })
        this.page.setData({
          "__banner__.materialType": 13,
          "__banner__.materialList": banners
        });
      }
    }
  }

  /**
   * Called By wue.$wueComponentIndex
   */
  process(data) {
    return data;
  }

  tapComponentBanner(e) {
    console.log('banner index = ' + e.target.dataset.index);
  }
}

export default Banner;