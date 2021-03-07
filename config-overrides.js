const {
    override,
    addBundleVisualizer,
    addWebpackAlias,
    addBabelPlugins,
} = require('customize-cra');
const path = require('path');

module.exports = override(
    process.env.NODE_ENV === 'development' && addBundleVisualizer(),
    ...addBabelPlugins('@emotion/babel-plugin'),
    addWebpackAlias({
        '~': path.resolve(__dirname, './src/'),
    }),
);
