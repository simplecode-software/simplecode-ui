
import createCachedSelector from 're-reselect';

import type {
    TSpecSize, TIconEmbedList, TColorsProp, TActivityState, TStyle,
} from '../../types';


type TIconOpts = Readonly<{
    icons: TIconEmbedList,
    colors: TColorsProp | null,
    size: TSpecSize,
    state: TActivityState,
}>;

const styleNoBg: TStyle = {
    backgroundColor: null as unknown as undefined,
    borderColor: null as unknown as undefined,
};

const getIconPropsInner = (
    icons: TIconEmbedList,
    colors: TColorsProp | null,
    size: TSpecSize,
    state: TActivityState,
): TIconEmbedList => [0, 1].map((i) => {
    if (!icons) {
        return null;
    }
    
    const icon = icons[i];
    if (!icon) {
        return null;
    }
    
    return {
        ...icon,
        colors: icon.colors || colors,
        size: icon.size || size,
        style: [styleNoBg, icon.style],
        state,
    };
});

export const getIconProps = createCachedSelector<
    TIconOpts,
    TIconEmbedList,
    TColorsProp | null,
    TSpecSize,
    TActivityState,
    TIconEmbedList
>(
    ({ icons }) => icons,
    ({ colors }) => colors,
    ({ size }) => size,
    ({ state }) => state,
    getIconPropsInner,
)(
    ({
        icons, colors, size, state,
    }) => [
        'getIconProps',
        icons.length,
        typeof colors === 'string' ? colors : '[custom]',
        size,
        state ?? 'none',
    ].join('-'),
);
