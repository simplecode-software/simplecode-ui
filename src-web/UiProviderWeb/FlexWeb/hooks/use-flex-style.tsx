import React from 'react';
import createCachedSelector from 're-reselect';

import {
    TThemeContext, TStyle, TPropsFlex, TColorsProp, TActivityState,
    TShadowName, TBorderName, TShapeName, ThemeContext, hiddenStyle, getMargins, getPaddings,
} from '../../../../src';
import { getFlexBehaviour } from '../../utils/get-flex-behaviour';


const minOpacity = 0.4;

type TColorOpts = Readonly<{
    colors: TColorsProp | null;
    themeContext: TThemeContext;
    state: TActivityState;
}>;

type TThemeOpts = TColorOpts & Readonly<{
    shape: TShapeName | null;
    border: TBorderName | null;
    shadow: TShadowName | null;
}>;

const getColorStyle = createCachedSelector<
    TColorOpts,
    TColorsProp | null,
    TThemeContext,
    TActivityState,
    TStyle
>(
    ({ colors }) => colors,
    ({ themeContext }) => themeContext,
    ({ state }) => state,
    (
        colors,
        themeContext,
        state,
    ) => {
        return ({
            borderColor: themeContext.getColorBorder(state, colors || 'none') || undefined,
            backgroundColor: themeContext.getColorBg(state, colors || 'none') || undefined,
        });
    },
)(
    ({ colors, state }) => [
        'spec/Flex/getColorStyle',
        typeof colors === 'string' ? colors : '[custom]',
        state ?? 'none',
    ].join('-'),
);

const getThemeStyle = createCachedSelector<
    TThemeOpts,
    TThemeContext,
    TStyle,
    TShapeName | null,
    TBorderName | null,
    TShadowName | null,
    TStyle
>(
    ({ themeContext }) => themeContext,
    (opts) => getColorStyle(opts),
    ({ shape }) => shape,
    ({ border }) => border,
    ({ shadow }) => shadow,
    (
        themeContext,
        colorStyle,
        shape,
        border,
        shadow,
    ) => [
        colorStyle,
        themeContext.getShape(shape),
        themeContext.getBorder(border),
        themeContext.getShadow(shadow),
    ],
)(
    ({
        colors, state, shape, border, shadow,
    }) => [
        'spec/Flex/getColorStyle',
        typeof colors === 'string' ? colors : '[custom]',
        state ?? 'none',
        shape ?? 'none',
        border ?? 'none',
        shadow ?? 'none',
    ].join('-'),
);


const useFlexStyle: (opts: TPropsFlex) => TStyle = ({
    border = null,
    colors = null,
    shadow = null,
    shape = null,
    state = null,
    opacityDisabled = null,
    flex = null,
    isDisabled = null,
    direction = null,
    justify = null,
    align = null,
    href = null,
    onPress = null,
    padding = null,
    margin = null,
    isHidden = null,
    style = null,
    events = null,
}) => {
    const finalOpacity = opacityDisabled ?? minOpacity;
    const finalDirection = direction || 'column';
    
    const themeContext: TThemeContext = React.useContext(ThemeContext);
    
    const themeStyle = getThemeStyle({
        border, colors, themeContext, shadow, shape, state,
    });
    
    const {
        flexShrink,
        flexGrow,
    } = getFlexBehaviour(flex);
    
    const flexStyle = React.useMemo<TStyle>(
        () => {
            const margins = getMargins(margin);
            const paddings = getPaddings(padding);

            return [
                themeStyle,
                ({
                    display: 'flex',
                    position: 'relative',
                    flexShrink,
                    flexGrow,
                    opacity: isDisabled ? finalOpacity : 1,
                    flexDirection: finalDirection,
                    justifyContent: justify || 'flex-start',
                    alignItems: align || 'stretch',
                    cursor: (href || onPress) ? 'pointer' : undefined,
                    userSelect: (href || onPress) ? 'none' : 'auto',
                    ...margins,
                    ...paddings,
                    pointerEvents: (!events || events === 'auto') ? 'auto' : 'none',
                } as TStyle),
                style,
            ];
        },
        [
            finalOpacity,
            themeStyle,
            flexShrink,
            flexGrow,
            isDisabled,
            finalDirection,
            justify,
            align,
            padding,
            margin,
            href,
            events,
            onPress,
            style,
        ],
    );
    
    return isHidden ? hiddenStyle : flexStyle;
};

export default useFlexStyle;
