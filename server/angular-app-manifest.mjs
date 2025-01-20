
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://vivekks1293.github.io/giggly-demo/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://vivekks1293.github.io/giggly-demo"
  },
  {
    "renderMode": 2,
    "route": "/https://vivekks1293.github.io/giggly-demo/basicbutton"
  },
  {
    "renderMode": 2,
    "route": "/https://vivekks1293.github.io/giggly-demo/iconbutton"
  },
  {
    "renderMode": 2,
    "route": "/https://vivekks1293.github.io/giggly-demo/buttongroup"
  },
  {
    "renderMode": 2,
    "route": "/https://vivekks1293.github.io/giggly-demo/splitbutton"
  },
  {
    "renderMode": 2,
    "route": "/https://vivekks1293.github.io/giggly-demo/textbox"
  },
  {
    "renderMode": 2,
    "route": "/https://vivekks1293.github.io/giggly-demo/textarea"
  },
  {
    "renderMode": 2,
    "route": "/https://vivekks1293.github.io/giggly-demo/checkbox"
  },
  {
    "renderMode": 2,
    "route": "/https://vivekks1293.github.io/giggly-demo/radiobutton"
  },
  {
    "renderMode": 2,
    "route": "/https://vivekks1293.github.io/giggly-demo/dropdown"
  },
  {
    "renderMode": 2,
    "route": "/https://vivekks1293.github.io/giggly-demo/switch"
  },
  {
    "renderMode": 2,
    "route": "/https://vivekks1293.github.io/giggly-demo/slider"
  },
  {
    "renderMode": 2,
    "route": "/https://vivekks1293.github.io/giggly-demo/datepicker"
  },
  {
    "renderMode": 2,
    "route": "/https://vivekks1293.github.io/giggly-demo/fileupload"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1630, hash: '96c668a95391afae4c1d0978aecf7fbec3dccc5102671a04e70c15179b453166', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1061, hash: 'f9d497b1a014c719fc580ec74d448072a918c78112e2c3ee1477183e91341965', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'iconbutton/index.html': {size: 6622, hash: 'eae7e5876facc5160d5e8080f31dff1e23ec8bf8f826fd5ab51ce312ba63e658', text: () => import('./assets-chunks/iconbutton_index_html.mjs').then(m => m.default)},
    'index.html': {size: 6622, hash: 'eae7e5876facc5160d5e8080f31dff1e23ec8bf8f826fd5ab51ce312ba63e658', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'splitbutton/index.html': {size: 6622, hash: 'eae7e5876facc5160d5e8080f31dff1e23ec8bf8f826fd5ab51ce312ba63e658', text: () => import('./assets-chunks/splitbutton_index_html.mjs').then(m => m.default)},
    'basicbutton/index.html': {size: 6622, hash: 'eae7e5876facc5160d5e8080f31dff1e23ec8bf8f826fd5ab51ce312ba63e658', text: () => import('./assets-chunks/basicbutton_index_html.mjs').then(m => m.default)},
    'buttongroup/index.html': {size: 6622, hash: 'eae7e5876facc5160d5e8080f31dff1e23ec8bf8f826fd5ab51ce312ba63e658', text: () => import('./assets-chunks/buttongroup_index_html.mjs').then(m => m.default)},
    'checkbox/index.html': {size: 6622, hash: 'eae7e5876facc5160d5e8080f31dff1e23ec8bf8f826fd5ab51ce312ba63e658', text: () => import('./assets-chunks/checkbox_index_html.mjs').then(m => m.default)},
    'textbox/index.html': {size: 6622, hash: 'eae7e5876facc5160d5e8080f31dff1e23ec8bf8f826fd5ab51ce312ba63e658', text: () => import('./assets-chunks/textbox_index_html.mjs').then(m => m.default)},
    'textarea/index.html': {size: 6622, hash: 'eae7e5876facc5160d5e8080f31dff1e23ec8bf8f826fd5ab51ce312ba63e658', text: () => import('./assets-chunks/textarea_index_html.mjs').then(m => m.default)},
    'radiobutton/index.html': {size: 6622, hash: 'eae7e5876facc5160d5e8080f31dff1e23ec8bf8f826fd5ab51ce312ba63e658', text: () => import('./assets-chunks/radiobutton_index_html.mjs').then(m => m.default)},
    'dropdown/index.html': {size: 6622, hash: 'eae7e5876facc5160d5e8080f31dff1e23ec8bf8f826fd5ab51ce312ba63e658', text: () => import('./assets-chunks/dropdown_index_html.mjs').then(m => m.default)},
    'switch/index.html': {size: 6622, hash: 'eae7e5876facc5160d5e8080f31dff1e23ec8bf8f826fd5ab51ce312ba63e658', text: () => import('./assets-chunks/switch_index_html.mjs').then(m => m.default)},
    'slider/index.html': {size: 6622, hash: 'eae7e5876facc5160d5e8080f31dff1e23ec8bf8f826fd5ab51ce312ba63e658', text: () => import('./assets-chunks/slider_index_html.mjs').then(m => m.default)},
    'datepicker/index.html': {size: 6622, hash: 'eae7e5876facc5160d5e8080f31dff1e23ec8bf8f826fd5ab51ce312ba63e658', text: () => import('./assets-chunks/datepicker_index_html.mjs').then(m => m.default)},
    'fileupload/index.html': {size: 6622, hash: 'eae7e5876facc5160d5e8080f31dff1e23ec8bf8f826fd5ab51ce312ba63e658', text: () => import('./assets-chunks/fileupload_index_html.mjs').then(m => m.default)},
    'styles-UFTE57JM.css': {size: 75125, hash: '3GYGPRMlfX0', text: () => import('./assets-chunks/styles-UFTE57JM_css.mjs').then(m => m.default)}
  },
};
