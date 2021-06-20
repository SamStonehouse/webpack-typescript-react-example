const curry = require('lodash/fp/curry');

module.exports = curry((opts, config) => {
  
  return {
    ...config,
    ...(opts.production ? null : { devtool: 'eval-cheap-module-source-map' }),
    devServer: {
      contentBase: opts.webRoot,
      publicPath: opts.assetDir,
      compress: true,
      port: 8080,
    },
  };
});
