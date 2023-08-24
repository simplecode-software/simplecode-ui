import React from 'react';
import createCachedSelector from 're-reselect';

import {
    TThemeContext, TStyle, TPropsTxt, TColorsProp, TActivityState,
    TShadowName, TBorderName, TShapeName, TSpecSize,
    TShadowTextName, ThemeContext, hiddenStyle, getMargins, getPaddings,
} from '../../../../src';
import { getFlexBehaviour } from '../../utils/get-flex-behaviour';


type TTextOpts = Readonly<{
    colors: TColorsProp | null;
    themeContext: TThemeContext;
    state: TActivityState;
    size: TSpecSize | null;
    font: string | null;
    isOpaque: boolean | null;
}>;

type TThemeOpts = TTextOpts & Readonly<{
    shape: TShapeName | null;
    border: TBorderName | null;
    shadow: TShadowTextName | null;
    shadowBox: TShadowName | null;
}>;

const getTextStyle = createCachedSelector<
    TTextOpts,
    TColorsProp | null,
    TThemeContext,
    TActivityState,
    TSpecSize | null,
    string | null,
    boolean | null,
    TStyle
>(
    ({ colors }) => colors,
    ({ themeContext }) => themeContext,
    ({ state }) => state,
    ({ size }) => size,
    ({ font }) => font,
    ({ isOpaque }) => isOpaque,
    (
        colors,
        themeContext,
        state,
        size,
        font,
        isOpaque,
    ) => {
        const lineHeight = themeContext.getSize(size, 'line');
        const fontStyle = themeContext.getFont(font || 'regular');
        
        return ({
            ...(typeof fontStyle === 'object' ? fontStyle : null),
            fontSize: themeContext.getSize(size, 'font') ?? undefined,
            lineHeight: lineHeight ? `${lineHeight}px` : undefined,
            color: themeContext.getColorText(state, colors || 'primarytext') ?? undefined,
            borderColor: isOpaque
                ? themeContext.getColorBorder(state, colors || 'primarytext') ?? undefined
                : undefined,
            backgroundColor: isOpaque
                ? themeContext.getColorBg(state, colors || 'primarytext') ?? undefined
                : undefined,
        });
    },
)(
    ({
        colors, state, size, font, isOpaque,
    }) => [
        'spec/TextFragment/getColorStyle',
        typeof colors === 'string' ? colors : '[custom]',
        state ?? 'none',
        size ?? 'none',
        font ?? 'none',
        isOpaque || 'false',
    ].join('-'),
);

const getThemeStyle = createCachedSelector<
    TThemeOpts,
    TThemeContext,
    TStyle,
    TShapeName | null,
    TBorderName | null,
    TShadowTextName | null,
    TShadowName | null,
    TStyle
>(
    ({ themeContext }) => themeContext,
    (opts) => getTextStyle(opts),
    ({ shape }) => shape,
    ({ border }) => border,
    ({ shadow }) => shadow,
    ({ shadowBox }) => shadowBox,
    (
        themeContext,
        colorStyle,
        shape,
        border,
        shadow,
        shadowBox,
    ) => [
        colorStyle,
        themeContext.getShape(shape),
        themeContext.getBorder(border),
        themeContext.getShadowText(shadow),
        themeContext.getShadow(shadowBox),
    ],
)(
    ({
        colors, state, shape, border, shadow, shadowBox,
    }) => [
        'spec/TextFragment/getColorStyle',
        typeof colors === 'string' ? colors : '[custom]',
        state ?? 'none',
        shape ?? 'none',
        border ?? 'none',
        shadow ?? 'none',
        shadowBox ?? 'none',
    ].join('-'),
);


const useTextStyle: (opts: TPropsTxt) => TStyle = ({
    border = null,
    colors = null,
    shadow = null,
    shape = null,
    state = null,
    flex = null,
    isDisabled = null,
    align = null,
    padding = null,
    margin = null,
    isHidden = null,
    style = null,
    shadowBox = null,
    size = null,
    font = null,
    isOpaque = null,
    lines = null,
    onPress = null,
    href = null,
}) => {
    const themeContext: TThemeContext = React.useContext(ThemeContext);
    
    const finalSize = size || 'md';
    const isPressable = !!(onPress || href);
    const finalState = state === 'hover' ? 'active' : state;
    
    const themeStyle = getThemeStyle({
        border,
        colors,
        themeContext,
        shape,
        state: finalState,
        shadow,
        shadowBox,
        size: finalSize,
        font,
        isOpaque,
    });

    const {
        flexShrink,
        flexGrow,
    } = getFlexBehaviour(flex);

    const hoverStyle = React.useMemo<TStyle>(
        () => {
            if (!isPressable) {
                return null;
            }
            return {
                '&:hover,&:focus': {
                    color: themeContext.getColorText('hover', colors || 'primarytext') ?? undefined,
                    borderColor: isOpaque
                        ? themeContext.getColorBorder('hover', colors || 'primarytext') ?? undefined
                        : undefined,
                    backgroundColor: isOpaque
                        ? themeContext.getColorBg('hover', colors || 'primarytext') ?? undefined
                        : undefined,
                },
                '&:active': {
                    color: themeContext.getColorText('active', colors || 'primarytext') ?? undefined,
                    borderColor: isOpaque
                        ? themeContext.getColorBorder('active', colors || 'primarytext') ?? undefined
                        : undefined,
                    backgroundColor: isOpaque
                        ? themeContext.getColorBg('active', colors || 'primarytext') ?? undefined
                        : undefined,
                },
            } as TStyle;
        },
        [colors, isOpaque, isPressable, themeContext],
    );
    
    const textStyle = React.useMemo<TStyle>(
        () => {
            const margins = getMargins(margin);
            const paddings = getPaddings(padding);

            return [
                themeStyle,
                ({
                    display: flexGrow ? 'inline-block' : 'inline',
                    textAlign: align ?? undefined,
                    flexShrink,
                    flexGrow,
                    opacity: isDisabled ? 0.4 : 1,
                    WebkitLineClamp: lines || undefined,
                    ...margins,
                    ...paddings,
                }) as TStyle,
                hoverStyle,
                style,
            ];
        },
        [themeStyle, flexGrow, align, flexShrink, isDisabled, padding, margin, hoverStyle, style, lines],
    );
    
    return isHidden ? hiddenStyle : textStyle;
};

export default useTextStyle;
