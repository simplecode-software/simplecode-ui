const common = require('./dep-common');

module.exports = {
    extends: './dep-common.js',
    
    options: {
        exclude: {
          path: 'node_modules|__mocks__|env\\.ts|types\\.ts|test\\.tsx?|src/(constants|utils|hooks)',
        },
        
        doNotFollow: {
            path: 'node_modules|src/(utils-test)',
        },
        
        focus : 'src/components/[^/]',
        
        reporterOptions: {
            dot: {
                ...common.options.reporterOptions.dot,
                collapsePattern: 'src/(constants|utils|hooks)',
                filters: {
                    exclude: {
                        path: 'node_modules|__mocks__|types\\.ts|test\\.tsx?|src/(constants|utils|hooks)',
                    },
                },
                theme: {
                    ...common.options.reporterOptions.dot.theme,
                    graph: {
                        ...common.options.reporterOptions.dot.theme.graph,
                        rankdir: 'LR',
                        ranksep: '0.2',
                    },
                },
            },
        },
    },
};
