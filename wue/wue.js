import NavigationTab from './component/navigation-tab/tab';
import Banner from './component/banner/banner';
import SingleImage from './component/single-image/img';
import MultiImage from './component/multi-image/img';
import NormalGroupGoods from './component/goods/normal-group/goods';

/**
 * 组件集合
 */
import ComponentIndex from './index/index';

export default function (scope) {
  console.log('----- comp index list -----');
  console.log('scope = ' + JSON.stringify(scope));
  console.log('---------------------------');

  let wue = {
    $wueNavigationTab: new NavigationTab(scope),
    $wueBanner: new Banner(scope),
    $wueSingleImage: new SingleImage(scope),
    $wueMultiImage: new MultiImage(scope),
    $wueNormalGroupGoods: new NormalGroupGoods(scope)
  };
  wue.$wueComponentIndex = new ComponentIndex(scope, wue);
  return wue;
}