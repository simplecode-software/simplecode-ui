import React from 'react';

import {
    TThemeContext, TOnPress, TStyle, TPropsIcon, TAnyComponent,
} from '../types';
import { IconEmpty } from '../IconEmpty';
import { ThemeContext } from '../ThemeContext';
import { Flex } from '../Flex';


const Icon_: React.ForwardRefRenderFunction<unknown, TPropsIcon> = (
    {
        name = null,
        Component = null,
        size = null,
        sizeIcon = null,
        rotation = null,
        shadowIcon = null,
        onPress = null,
        align = null,
        justify = null,
        style = null,
        ...propsFlex
    }: TPropsIcon,
    ref,
) => {
    const { state = null, colors = null } = propsFlex;
    
    const themeContext: TThemeContext = React.useContext(ThemeContext);
    const { getShadowText, getColorText } = themeContext;
    
    const FinalIcon: TAnyComponent = Component || IconEmpty;
    
    const finalSize = size || 'md';
    
    const minSize: number | null = themeContext.getSize(finalSize, 'icon');
    
    const iconStyle = React.useMemo<TStyle>(
        () => [
            {
                minHeight: minSize ?? undefined,
                minWidth: minSize ?? undefined,
                lineHeight: minSize ?? undefined,
                textAlign: 'center',
            },
            // fixme
            !!rotation && ({ transform: [{ rotate: `${rotation}deg` }] } as unknown as TStyle),
            getShadowText(shadowIcon),
        ],
        [getShadowText, minSize, rotation, shadowIcon],
    );
    
    const containerStyle = React.useMemo<TStyle>(
        () => {
            return [
                {
                    minHeight: minSize ?? undefined,
                    minWidth: minSize ?? undefined,
                },
                style,
            ];
        },
        [minSize, style],
    );
    
    const press: TOnPress = React.useCallback(
        (e) => {
            if (onPress) {
                onPress(e, name);
            }
        },
        [onPress, name],
    );
    
    return (
        <Flex
            ref={ref}
            {...propsFlex}
            style={containerStyle}
            onPress={onPress && press}
            align={align || 'center'}
            justify={justify || 'center'}
        >
            <FinalIcon
                name={name || 'star'}
                size={sizeIcon ?? 18}
                color={getColorText(state, colors) || undefined}
                style={iconStyle}
            />
        </Flex>
    );
};


export const Icon = React.memo(React.forwardRef(Icon_));
