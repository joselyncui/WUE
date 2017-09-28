// wue/views/tabbar/tabbar.js
import Component from '../../base/component';

class Tabbar extends Component {
  constructor(options) {
    super(Object.assign({}, options));
    this.page.tapComponentTabbar = this.tapComponentTabbar;
  }

  show(data) {
    let tabbar = {};
    
    let list = data.navList;
    if (list instanceof Array) {
      let tabItems = [];
      list.forEach(item => {
        tabItems.push(item);
      })
      tabbar['tabItems'] = tabItems;
    }

    tabbar['curIndex'] = 0;
    tabbar['icon'] = tabbar['tabItems'][0].focusTitleIconUrl;
    this.page.setData({
      "__tabbar__": tabbar,
    });
  }

  tapComponentTabbar(e) {
    let index = e.currentTarget.dataset.index;
    let icon = this.data.__tabbar__.tabItems[index].focusTitleIconUrl;
    this.setData({
      "__tabbar__.curIndex": index,
      "__tabbar__.icon": icon,
    });
  }
}

export default Tabbar;