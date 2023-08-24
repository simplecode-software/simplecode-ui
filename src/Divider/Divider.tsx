import React from 'react';

import type {
    TStyle,
    TPropsDivider,
    TThemeContext,
} from '../types';
import { Flex } from '../Flex';
import { ThemeContext } from '../ThemeContext';


const Divider_: React.ForwardRefRenderFunction<unknown, TPropsDivider> = (
    {
        size = null,
        style = null,
        shape = null,
        shadow = null,
        colors = null,
        ...propsFlex
    }: TPropsDivider,
    ref,
) => {
    const finalSize = size || 'md';
    
    const themeContext: TThemeContext = React.useContext(ThemeContext);
    
    const containerStyle = React.useMemo<TStyle>(
        () => {
            const size = themeContext.getSize(finalSize, 'divider');
            return [
                {
                    minWidth: size,
                    height: size,
                } as React.CSSProperties,
                style,
            ];
        },
        [themeContext, finalSize, style],
    );
    
    return (
        <Flex
            ref={ref}
            {...propsFlex}
            style={containerStyle}
            colors={colors || 'secondary'}
            shape={shape || 'none'}
            shadow={shadow || 'none'}
        />
    );
};

export const Divider = React.memo(React.forwardRef(Divider_));
