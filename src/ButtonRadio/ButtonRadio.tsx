
import React from 'react';

import { Button } from '../Button';
import {
    TIconEmbedList,
    TPropsCheckbox,
} from '../types';
import { SimpleCodeUiContext } from '../SimpleCodeUiContext';


const ButtonRadio_: React.ForwardRefRenderFunction<unknown, TPropsCheckbox> = (
    {
        icons = null,
        iconsActive = null,
        colors = null,
        shadow = null,
        shape = null,
        justify = null,
        ...propsButton
    }: TPropsCheckbox,
    ref,
) => {
    const { icons: simpleCodeIcons } = React.useContext(SimpleCodeUiContext);
    
    const radioActive = React.useMemo<TIconEmbedList>(
        () => [simpleCodeIcons.radioOn],
        [simpleCodeIcons.radioOn],
    );
    
    const radioEmpty: TIconEmbedList = React.useMemo(
        () => [simpleCodeIcons.radioOff],
        [simpleCodeIcons.radioOff],
    );
    
    return (
        <Button
            ref={ref}
            {...propsButton}
            icons={icons || radioEmpty}
            colors={colors || 'primarytext'}
            shadow={shadow || 'none'}
            shape={shape || 'none'}
            justify={justify || 'flex-start'}
            iconsActive={iconsActive || radioActive}
        />
    );
};

export const ButtonRadio = React.memo(React.forwardRef(ButtonRadio_));
