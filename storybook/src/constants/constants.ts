import { blue } from './themes';


export const StoryTypeColors = {
    control: {
        type: 'select',
    },
    options: Object.keys(blue.colorSets),
};

export const StoryTypeTheme = {
    control: {
        type: 'select',
    },
    options: [
        'blue',
        'dark',
        'contrast',
    ],
};

export const StoryTypeSizes = {
    control: {
        type: 'select',
    },
    options: [
        null,
        'xxsm',
        'xsm',
        'sm',
        'md',
        'lg',
        'xlg',
        'xxlg',
        'auto',
    ],
};


export const StoryTypeShape = {
    control: {
        type: 'select',
    },
    options: [
        'none',
        'rounded',
        'rounded.all',
        'rounded.top',
        'rounded.bottom',
        'rounded.left',
        'rounded.right',
        'xlg',
        'xlg.all',
        'xlg.top',
        'xlg.bottom',
        'xlg.left',
        'xlg.right',
        'lg',
        'lg.all',
        'lg.top',
        'lg.bottom',
        'lg.left',
        'lg.right',
        'md',
        'md.all',
        'md.top',
        'md.bottom',
        'md.left',
        'md.right',
        'sm',
        'sm.all',
        'sm.top',
        'sm.bottom',
        'sm.left',
        'sm.right',
    ],
};

export const StoryTypeBorder = {
    control: {
        type: 'select',
    },
    options: [
        'none',
        'xlg',
        'xlg.all',
        'xlg.top',
        'xlg.bottom',
        'xlg.left',
        'xlg.right',
        'lg',
        'lg.all',
        'lg.top',
        'lg.bottom',
        'lg.left',
        'lg.right',
        'md',
        'md.all',
        'md.top',
        'md.bottom',
        'md.left',
        'md.right',
        'sm',
        'sm.all',
        'sm.top',
        'sm.bottom',
        'sm.left',
        'sm.right',
    ],
};


export const StoryTypeShadow = {
    control: {
        type: 'select',
    },
    options: [
        'none',
        'sm',
        'md',
        'lg',
    ],
};


export const StoryTypeBoolean = {
    control: {
        type: 'boolean',
    },
};


export const StoryTypeIconSet = {
    control: {
        type: 'select',
    },
    options: [
        'AntDesign',
        'Entypo',
        'EvilIcons',
        'Feather',
        'FontAwesome',
        'FontAwesome5',
        'Fontisto',
        'Foundation',
        'Ionicons',
        'MaterialCommunityIcons',
        'MaterialIcons',
        'Octicons',
        'SimpleLineIcons',
        'Zocial',
    ],
};
export const themeArgs = {
    '[theme]': 'blue',
};

export const themeArgTypes = {
    '[theme]': StoryTypeTheme,
};
