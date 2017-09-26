// wue/views/money-view/money-view.js

export default class MoneyView {
  
  process(data) {
    let {price, isNormal} = data;
    if (price != null) {
      let prices = price.split(".");
      return {
        "isNormal": isNormal,
        "prePrice": prices[0],
        "postPrice": '.' + prices[1],
      };
    }
  }
}