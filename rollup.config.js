import babel from '@rollup/plugin-babel';
import { visualizer } from 'rollup-plugin-visualizer';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import typescript2 from 'rollup-plugin-typescript2';

import pkg from './package.json';


const rollupConfig = {
    cache: false,
    input: pkg.source,
    output: [
        {
            file: pkg.main,
            format: 'umd',
            name: 'simplecode-ui',
            sourcemap: true,
            globals: { react: 'React', 're-reselect': 'createCachedSelector' },
        },
        {
            file: pkg.module,
            format: 'esm',
            sourcemap: true,
            globals: { react: 'React', 're-reselect': 'createCachedSelector' },
        },
    ],
    plugins: [
        del({ targets: ['dist/*'] }),
        external(),
        resolve(),
        commonjs(),
        typescript2({
            clean: true,
        }),
        babel({
            exclude: '**/node_modules/**',
            babelHelpers: 'runtime',
            extensions: [
                '.js',
                '.json',
                '.ts',
                '.tsx',
            ],
        }),
        visualizer({
            filename: 'doc/bundle.html',
            title: 'SimpleCode UI Bundle',
        }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};

export default rollupConfig;
