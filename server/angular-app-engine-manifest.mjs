
export default {
  basePath: 'https://vivekks1293.github.io/giggly-demo',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
