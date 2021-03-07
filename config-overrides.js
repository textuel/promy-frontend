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
        '@components/*': path.resolve(__dirname, './src/components/*'),
        '@reducers/*': path.resolve(__dirname, './src/reducers/*'),
        '@store/*': path.resolve(__dirname, './src/store/*'),
        '@actions/*': path.resolve(__dirname, './src/actions/*'),
        '@types/*': path.resolve(__dirname, './src/types/*'),
        '@utils/*': path.resolve(__dirname, './src/utils/*'),
    }),
);
