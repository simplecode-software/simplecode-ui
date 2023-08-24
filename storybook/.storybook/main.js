const path = require('node:path');


global.nativeModuleProxy = {};

module.exports = {
    stories: ['../src/**/*.stories.*'],
    addons: [
        '@storybook/addon-postcss',
        '@storybook/addon-links',
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        '@storybook/addon-viewport',
        '@storybook/addon-backgrounds',
        '@storybook/addon-toolbars',
    ],
    
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            './use-screen-width$': path.resolve(__dirname, '../../__mocks__/use-screen-width'),
            '~/': path.resolve(__dirname, '../../src/'),
        };
        console.log('ttt', require.resolve('@emotion/babel-preset-css-prop'));
        config.module.rules = [
            ...config.module.rules,
            {
                test: /\.(ts|tsx)$/,
                loader: require.resolve('babel-loader'),
                options: {
                    "babelrc": false,
                    "configFile": false,
                    presets: [
                        ['react-app', { flow: true, typescript: true }],
                        require.resolve('@emotion/babel-preset-css-prop'),
                    ],
                    root: path.resolve(__dirname, '..'),
                },
            },
        ];
        
        config.resolve.extensions.push('.ts', '.tsx');
        
        config.performance = {
            ...config.performance,
            hints: false,
            maxEntrypointSize: 512000000,
            maxAssetSize: 512000000,
        };
        
        config.devtool = 'eval';
        
        return config;
    },
};
