import React from 'react';

import {
    TStyle, TPropsAbs,
} from '../types';
import { Flex } from '../Flex';


const Abs_: React.ForwardRefRenderFunction<unknown, TPropsAbs> = (
    {
        left,
        right,
        top,
        bottom,
        width,
        height,
        style,
        ...propsFlex
    }: TPropsAbs,
    ref,
) => {
    const absStyle = React.useMemo<TStyle>(
        () => [
            {
                position: 'absolute',
                overflow: 'hidden',
                left: left ?? undefined,
                right: right ?? undefined,
                top: top ?? undefined,
                bottom: bottom ?? undefined,
                width: width ?? undefined,
                height: height ?? undefined,
            },
            style,
        ],
        [bottom, height, left, style, right, top, width],
    );
    
    return (
        <Flex
            ref={ref}
            {...propsFlex}
            style={absStyle}
        />
    );
};

export const Abs = React.memo(React.forwardRef(Abs_));
