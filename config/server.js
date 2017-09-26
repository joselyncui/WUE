const BASE_URL = 'https://api.vd.cn/';

function getServices(relativeUrl) {
  return BASE_URL + relativeUrl;
}

export default getServices;