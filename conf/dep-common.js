module.exports = {
    extends: 'dependency-cruiser/configs/recommended',
    forbidden: [
        {
            name: 'no-circular',
            severity: 'error',
            comment: 'A circular relationship found.',
            from: {},
            to: {
                circular: true,
            },
        },
        {
            name: 'no-orphans',
            comment: 'This is an orphan module',
            severity: 'error',
            from: {
                orphan: true,
                pathNot: [
                    '\\.d\\.ts$', // TypeScript declaration files
                    '(^|/)tsconfig\\.json$', // TypeScript config
                    '(^|/)(babel|webpack)\\.config\\.(js|cjs|mjs|ts|json)$', // other configs
                ],
            },
            to: {},
        },
        {
            name: 'no-deprecated-core',
            comment: 'Node core modules should not be used.',
            severity: 'error',
            from: {},
            to: {
                dependencyTypes: [
                    'core',
                ],
            },
        },
        {
            name: 'not-to-deprecated',
            comment: 'This module has been deprecated.',
            severity: 'error',
            from: {},
            to: {
                dependencyTypes: [
                    'deprecated',
                ],
            },
        },
        {
            name: 'no-non-package-json',
            severity: 'error',
            comment: 'This npm package isn\'t in the \'dependencies\'.',
            from: {},
            to: {
                dependencyTypes: [
                    'npm-no-pkg',
                    'npm-unknown',
                ],
            },
        },
        {
            name: 'not-to-unresolvable',
            comment: 'The dependency module cannot be found',
            severity: 'error',
            from: {},
            to: {
                couldNotResolve: true,
            },
        },
        {
            name: 'no-duplicate-dep-types',
            comment: 'The dependency is mentioned more than once in package.json',
            severity: 'warn',
            from: {},
            to: {
                moreThanOneDependencyType: true,
            },
        },

        /* rules you might want to tweak for your specific situation: */
        {
            name: 'not-to-spec',
            comment: 'This module depends on a test file.',
            severity: 'error',
            from: {},
            to: {
                path: '\\.test\\.tsx?$',
            },
        },
        {
            name: 'optional-deps-used',
            severity: 'info',
            comment: 'This module depends on an optional dependency',
            from: {},
            to: {
                dependencyTypes: [
                    'npm-optional',
                ],
            },
        },
        {
            name: 'peer-deps-used',
            comment: 'This module depends on a peer dependency',
            severity: 'warn',
            from: {},
            to: {
                dependencyTypes: [
                    'npm-peer',
                ],
            },
        },
    ],
    options: {
        exclude: {
          path: 'node_modules|__mocks__|env\\.ts|types\\.ts|test\\.tsx?|src/(components|constants|hooks|utils|actions|selectors|store)',
        },
        
        doNotFollow: {
            path: 'node_modules',
        },
        
        tsPreCompilationDeps: true,
        tsConfig: {
            fileName: 'tsconfig.json',
        },
        babelConfig: {
            fileName: 'conf/dslint-babel.json',
        },
        
        reporterOptions: {
            dot: {
                filters: {
                    exclude: {
                        path: 'node_modules|__mocks__|env\\.ts|types\\.ts|test\\.tsx?|src/(components|constants|hooks|utils|actions|selectors|store)',
                    },
                },
                theme: {
                    graph: {
                        rankdir: 'TB',
                        bgcolor: '#29282f',
                        color: '#c3dfe088',
                        fontcolor: '#c3dfe0',
                        fillcolor: 'transparent',
                        splines: 'ortho',
                        nodesep: '0.4',
                        ranksep: '0.4',
                        fontname: 'Courier New',
                        fontsize: '18',
                        concentrate: false,
                        center: false,
                        compound: true,
                        gradientangle: '270',
                        penwidth: '2.1',
                    },
                    edge: {
                        arrowhead: 'vee',
                        arrowsize: '0.8',
                        weight: '0.4',
                        minlen: '3',
                        penwidth: '0.9',
                    },
                    node: {
                        height: '0.25',
                        fontname: 'Courier New',
                        fontsize: '16',
                        margin: '0.25',
                    },
                    modules: [
                        {
                            criteria: { source: '^src/[^/]' },
                            attributes: {
                                shape: 'box',
                                fillcolor: '#1e2121',
                                fontcolor: '#8acfdb',
                                color: '#8acfdb',
                            }
                        },
                        {
                            criteria: { consolidated: true },
                            attributes: {
                                shape: 'folder',
                                fillcolor: '#221f21',
                                fontcolor: '#335f77',
                                color: '#335f77',
                            },
                        },
                    ],
                    dependencies: [
                        {
                            criteria: { 'rules[0].severity': 'error' },
                            attributes: { fontcolor: 'red', color: 'red' }
                        },
                        {
                            criteria: { 'rules[0].severity': 'warn' },
                            attributes: { fontcolor: 'orange', color: 'orange' }
                        },
                        {
                            criteria: { 'rules[0].severity': 'info' },
                            attributes: { fontcolor: 'blue', color: 'blue' }
                        },
                        {
                            criteria: { resolved: '^src/[^/]' },
                            attributes: {
                                color: '#8acfdb77',
                            }
                        },
                        {
                            criteria: { resolved: '.*' },
                            attributes: {
                                color: '#8d9da122',
                            }
                        },
                    ],
                },
            },
        },
    },
};
