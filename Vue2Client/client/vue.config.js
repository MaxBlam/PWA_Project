const path = require('path');

module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
    },
    manifestOptions: {
      name: 'Nekotastic - Digital Cookbook',
      short_name: 'Nekotastic',
      theme_color: '#F4A300',
      background_color: '#222222',
      display: 'standalone',
      start_url: '/',
    },
  },

  outputDir: path.resolve(__dirname, '../server/client'),
  productionSourceMap: false,

  transpileDependencies: ['vuetify'],
};
