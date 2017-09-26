class Component {

  constructor(options) {
    // console.log('[component] options = ' + JSON.stringify(options));
    this.__init();
  }

  __init() {
    let pages = getCurrentPages();
    this.page = pages[pages.length - 1];
  }
}
export default Component;