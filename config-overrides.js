const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config, env) {
  config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));
  config.plugins = config.plugins.map(plugin => {
    if(plugin.constructor.name === 'GenerateSW') {
      return new WorkboxWebpackPlugin.InjectManifest({
        swSrc: './src/sw.js',
        swDest: 'service-worker.js',
      })
      // ,
      // new WorkboxWebpackPlugin.GenerateSW({ 
      //   clientsClaim: true,
      //   skipWaiting: true,
      //   cleanupOutdatedCaches: true,
      //   runtimeCaching: [{
      //     urlPattern: /static/,
      //     handler: 'NetworkFirst',
      //     options: {
      //       fetchOptions: {
      //           mode: 'no-cors',
      //         }
      //     }
      //   }]
      // })
    }
    return plugin
  })
  return config
}

