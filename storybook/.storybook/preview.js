import { themes } from '@storybook/theming';


export const parameters = {
    layout: 'centered',
    viewport: {
        defaultViewport: 'desktop',
        viewports: {
            iPhone5: {
              name: 'iPhone5',
              styles: {
                width: '320px',
                height: '',
              },
              type: 'mobile',
            },
            iPhoneX: {
              name: 'iPhoneX',
              styles: {
                width: '375px',
                height: '',
              },
              type: 'mobile',
            },
            desktop: {
              name: 'Desktop',
              styles: {
                width: '',
                height: '',
              },
              type: 'desktop',
            },
        },
    },
    docs: {
        theme: themes.dark,
    },
    previewTabs: {
        'storybook/docs/panel': {
            hidden: true,
        },
    },
    options: {
        storySort: {
            order: ['Design System', ['Overview', ['Theme'], 'Atoms', 'Molecules']],
        },
    },
};
