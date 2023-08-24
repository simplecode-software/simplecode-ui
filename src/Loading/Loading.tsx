import React from 'react';

import { Button } from '../Button';
import { LoadingIcon } from '../LoadingIcon';
import {
    TIconEmbed, TPropsButton, TSpecSize,
} from '../types';


const labelSizes: Readonly<Record<TSpecSize, TSpecSize>> = {
    xxsm: 'xsm',
    xsm: 'xsm',
    sm: 'sm',
    md: 'sm',
    lg: 'md',
    xlg: 'lg',
    xxlg: 'xlg',
    auto: 'md',
};

const iconSizes: Readonly<Record<TSpecSize, number>> = {
    xxsm: 18,
    xsm: 18,
    sm: 18,
    md: 36,
    lg: 36,
    xlg: 36,
    xxlg: 36,
    auto: 36,
};


const Loading_: React.ForwardRefRenderFunction<unknown, TPropsButton> = (
    {
        icons = null,
        size = null,
        sizeText = null,
        font = null,
        direction = null,
        shape = null,
        border = null,
        shadow = null,
        shadowText = null,
        colors = null,
        ...propsButton
    }: TPropsButton,
    ref,
) => {
    const sizeFinal: TSpecSize = size || 'md';
    const indicatorSize: number = iconSizes[sizeFinal] || 36;
    const labelSize = labelSizes[sizeFinal];
    
    const iconsDefault = React.useMemo(
        () => [{
            Component: LoadingIcon,
            sizeIcon: indicatorSize ?? 36,
            size: indicatorSize === 18 ? 'sm' : 'md',
        } as TIconEmbed],
        [indicatorSize],
    );
    
    const directionFinal = direction || 'column';
    
    return (
        <Button
            ref={ref}
            {...propsButton}
            colors={colors || 'secondarytext'}
            icons={icons || iconsDefault}
            size={directionFinal === 'column' ? 'auto' : sizeFinal}
            sizeText={sizeText || labelSize}
            font={font || 'regular'}
            shape={shape || 'none'}
            border={border || 'none'}
            shadow={shadow || 'none'}
            shadowText={shadowText || 'none'}
            direction={direction || 'column'}
        />
    );
};


export const Loading = React.memo(React.forwardRef(Loading_));
