// tab.js
import Component from '../../base/component';

class NavigationTab extends Component {

  constructor(options) {
    super(Object.assign({}, options));
    // this.page.setData({
    //   "__tab__.curTabIndex": 0,
    //   "__tab__.scrollLeft": 0,
    //   "__tab__.column": 0,
    //   "__tab__.itemWidth": "100px",
    //   "__tab__.tabItems": []
    // });
    this.page.tapComponentNavigationTab = this.tapComponentNavigationTab;
  }

  show(data) {
    let list = data.materialList;
    let column = data.column;
    let itemWidth = (getApp().globalData.systemInfo.screenWidth / column) + 'px';

    if (list instanceof Array) {
      let items = [];
      list.forEach(item => {
        items.push(item);
      });

      this.page.setData({
        "__tab__.curTabIndex": 0,
        "__tab__.scrollLeft": 0,
        "__tab__.column": column,
        "__tab__.tabItems": items,
        "__tab__.itemWidth": itemWidth
      });
    }
  }

  tapComponentNavigationTab(e) {
    let column = this.data.__tab__.column;
    let systemInfo = getApp().globalData.systemInfo;
    let halfScreenWidth = systemInfo.screenWidth / 2;
    let itemWidth = systemInfo.screenWidth / column;

    this.setData({
      "__tab__.curTabIndex": e.currentTarget.dataset.index,
      "__tab__.scrollLeft": e.target.offsetLeft + itemWidth / 2 - halfScreenWidth,
    })
  }
}

export default NavigationTab;