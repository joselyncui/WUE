// wue/index/index.js
import Component from '../base/component';

export default class ComponentIndex extends Component {

  constructor(options, wue) {
    super(Object.assign({}, options));
    this.wue = wue;
  }

  show(data) {
    if (data instanceof Array) {
      let items = [];
      data.forEach((item, index) => {
        item['componentIndex'] = index;
        switch (item.materialType) {
          case 0:
            items.push(this.wue.$wueSingleImage.process(item));
            break;

          case 3:
            items.push(this.wue.$wueMultiImage.process(item));
            break;

          case 13:
            items.push(this.wue.$wueBanner.process(item));
            break;

          case 18:
            items.push(this.wue.$wueNormalGroupGoods.process(item));
            break;

          default:
            break;
        }
      });

      this.page.setData({
        "__component__.items": items
      });
    }
  }
}