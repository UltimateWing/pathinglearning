
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/pathinglearning/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/pathinglearning"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 515, hash: '17e43255a78819af3960b88b9d1923b49b895570b9d0c410bfc8a74a2ac628d5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: 'df97d567e93242be5c7a27e1b40ea1071a5ea600580e04e443f50fa6707a2efe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20881, hash: 'b90130f702ed3acf5378e8134cb03471f6b5d32462f08e77c908ed641aa60c0d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
