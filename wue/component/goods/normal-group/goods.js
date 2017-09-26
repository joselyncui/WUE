// wue/component/goods/normal-group/goods.js
import Component from '../../../base/component';
import MoneyView from '../../../views/money-view/money-view';

class NormalGroupGoods extends Component {
  constructor(options) {
    super(Object.assign({}, options));
    this.page.tapComponentGoodsNormalGroup = this.tapComponentGoodsNormalGroup;
  }

  show(data) {
    let direction = (parseInt(data.column) == data.column ? "vertical" : "horizontal");
    if (data.materialType == 18 && direction === 'vertical') {
      let list = data.goodsList;
      let mv = new MoneyView(this);
      if (list instanceof Array) {
        list.forEach(goods => {
          let newSalePrice = mv.process({
            "price": goods.sale_price,
            "isNormal": false
          });

          let newHighMarketPrice = mv.process({
            "price": goods.highMarketPrice,
            "isNormal": true
          });

          goods['newSalePrice'] = newSalePrice;
          goods['newHighMarketPrice'] = newHighMarketPrice;
        });
      }
    }

    this.page.setData({
      "__normalGroupGoods__": data,
      "__normalGroupGoods__.direction": direction,
      "__normalGroupGoods__.itemWidth": getApp().globalData.systemInfo.screenWidth / data.column + 'px'
    });
  }

  process(data){
    let direction = (parseInt(data.column) == data.column ? "vertical" : "horizontal");
    if (data.materialType == 18 && direction === 'vertical') {
      let list = data.goodsList;
      let mv = new MoneyView(this);
      if (list instanceof Array) {
        list.forEach(goods => {
          let newSalePrice = mv.process({
            "price": goods.sale_price,
            "isNormal": false
          });

          let newHighMarketPrice = mv.process({
            "price": goods.highMarketPrice,
            "isNormal": true
          });

          goods['newSalePrice'] = newSalePrice;
          goods['newHighMarketPrice'] = newHighMarketPrice;
        });
      }
    }

    data['direction'] = direction;
    data['itemWidth'] = getApp().globalData.systemInfo.screenWidth / data.column + 'px';
    return data;
  }

  tapComponentGoodsNormalGroup(e) {
    console.log('segue = ' + JSON.stringify(e.currentTarget.dataset.segue));
  }
}

export default NormalGroupGoods;