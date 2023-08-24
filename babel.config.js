// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = (api) => {
    api.cache(true);
    return {
        presets: [
            '@babel/env',
            '@babel/preset-react',
        ],
        plugins: [
            '@babel/plugin-transform-runtime',
            [
                'module-resolver',
                {
                    alias: {
                        '~': './src',
                    },
                },
            ],
            '@babel/plugin-proposal-export-namespace-from',
        ],
    };
};
