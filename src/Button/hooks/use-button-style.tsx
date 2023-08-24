import React from 'react';
import createCachedSelector from 're-reselect';

import type {
    TThemeContext,
    TStyle,
    TSpecSize,
} from '../../types';
import { ThemeContext } from '../../ThemeContext';


type TStyleOpts = Readonly<{
    size: TSpecSize,
    style: TStyle | null,
}>;

type TButtonSizeStyle = Readonly<{
    minWidth: number | undefined;
    height: number | undefined;
    minHeight: number | undefined;
}>;

const getSizeStyle = createCachedSelector<
    number | null,
    number | null,
    TButtonSizeStyle
>(
    (size) => size,
    (size) => ({
        minWidth: size ?? undefined,
        height: size ?? undefined,
        minHeight: size ?? undefined,
    }),
)((size) => `spec/Button/getSizeStyle-${size ?? 'none'}`);

const getButtonStyle = createCachedSelector<
    React.CSSProperties,
    TStyle | null,
    React.CSSProperties,
    TStyle | null,
    TStyle
>(
    (sizeStyle) => sizeStyle,
    (_sizeStyle, customStyle) => customStyle,
    (sizeStyle, customStyle) => {
        if (!customStyle) {
            return sizeStyle;
        }
        return [sizeStyle, customStyle];
    },
)(
    (sizeStyle, customStyle) => [
        'spec/Button/getButtonStyle',
        sizeStyle.height || 'auto',
        customStyle ? 'custom' : 'default',
    ].join('-'),
);


export const useButtonStyle: (opts: TStyleOpts) => TStyle = ({
    size,
    style,
}) => {
    const themeContext: TThemeContext = React.useContext(ThemeContext);
    
    const buttonStyle = React.useMemo<TStyle>(
        () => {
            const sizeValue = themeContext.getSize(size, 'button');
            return getButtonStyle(getSizeStyle(sizeValue), style);
        },
        [themeContext, size, style],
    );
    
    return buttonStyle;
};
