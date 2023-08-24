import React from 'react';

import type {
    TIconEmbedList,
    TPropsButton,
    TPropsButtonGroup,
} from '../types';
import { ButtonRadio } from '../ButtonRadio';
import { ButtonGroup } from '../ButtonGroup';
import { SimpleCodeUiContext } from '../SimpleCodeUiContext';


const renderItem: (button: TPropsButton) => React.ReactElement = (button) => (
    <ButtonRadio
        key={button.name}
        {...button}
    />
);


const ButtonGroupRadio_: React.ForwardRefRenderFunction<
unknown, TPropsButtonGroup
> = (
    {
        onRenderItem = null,
        behavior = null,
        direction = null,
        shadow = null,
        align = null,
        iconsActive = null,
        ...propsButtonGroup
    }: TPropsButtonGroup,
    ref,
) => {
    const { icons: simpleCodeIcons } = React.useContext(SimpleCodeUiContext);
    
    const radioActive = React.useMemo<TIconEmbedList>(
        () => [simpleCodeIcons.radioOn],
        [simpleCodeIcons.radioOn],
    );
    
    return (
        <ButtonGroup
            ref={ref}
            {...propsButtonGroup}
            behavior={behavior || 'radio'}
            direction={direction || 'column'}
            shadow={shadow || 'none'}
            align={align || 'flex-start'}
            onRenderItem={onRenderItem || renderItem}
            iconsActive={iconsActive || radioActive}
        />
    );
};

export const ButtonGroupRadio = React.memo(React.forwardRef(ButtonGroupRadio_));
