import React from 'react';

import { TextFragment } from '../TextFragment';
import { TPropsIconComponent, TStyle } from '../types';


const IconEmpty_: React.FunctionComponent<TPropsIconComponent> = ({
    size = null,
    color = null,
    style = null,
}: TPropsIconComponent) => {
    const iconStyle = React.useMemo<TStyle>(
        () => [
            {
                fontSize: size ?? undefined,
                color: color ?? undefined,
            },
            style,
        ],
        [color, size, style],
    );
    
    
    return (
        <TextFragment style={iconStyle}>
            ★
        </TextFragment>
    );
};


export const IconEmpty = React.memo(IconEmpty_);
