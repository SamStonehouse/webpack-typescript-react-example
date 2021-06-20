const curry = require('lodash/fp/curry');
const compose = require('lodash/fp/compose');

const rule = require('../utils/rule');


module.exports = curry(
  (opts, _config) => {
    return compose(
      (config) => {
        return rule(
          {
            test: /\.(j|t)sx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                root: config.root,
              },
            }
          },
          config,
        );
      },
      (config) => {
        return {
          ...config,
          resolve: {
            ...config.resolve,
            extensions: [...(config.resolve && config.resolve.extensions ? config.resolve.extensions : []), ".ts", ".js", ".tsx", ".jsx"]
          }
        };
      }
    )(_config);
  },
);
