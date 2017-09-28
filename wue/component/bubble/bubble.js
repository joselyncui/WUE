// wue/component/bubble/bubble.js
import Component from '../../base/component';

class Bubble extends Component {
  constructor(options) {
    super(Object.assign({}, options));
    this.page.tapComponentBubble = this.tapComponentBubble;
  }

  show(data) {
    let bubble = {
      curIndex: 0,
      hidden: true
    };

    let list = data.materialList;
    if (list instanceof Array) {
      let items = [];
      list.forEach(item => {
        items.push(item);
      });
      bubble.items = items;
    }
    this.page.setData({
      "__bubble__": bubble
    });

    if (bubble.items != null && bubble.items.length > 0) {
      this.start();
    }
  }

  /**
   * 每6秒交替显示/隐藏
   */
  start() {
    let that = this.page;
    setInterval(() => {
      let items = that.data.__bubble__.items.length;
      let curIndex = that.data.__bubble__.curIndex;
      let hidden = !that.data.__bubble__.hidden;
      that.setData({
        "__bubble__.curIndex": hidden ? curIndex : (curIndex + 1) % items,
        "__bubble__.hidden": hidden
      })
    }, 6000);
  }

  tapComponentBubble(e) {
  }
}

export default Bubble;