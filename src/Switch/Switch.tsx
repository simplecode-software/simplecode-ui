import React from 'react';

import type {
    TStyle, TIconEmbedList, TPropsSwitch,
} from '../types';
import { Button } from '../Button';
import { useSwitch } from '../hooks/use-switch';
import { SimpleCodeUiContext } from '../SimpleCodeUiContext';


const minWidth: TStyle = { minWidth: 50 };


const Switch_: React.ForwardRefRenderFunction<unknown, TPropsSwitch> = (
    {
        colors = null,
        colorsActive = null,
        onChange = null,
        style = null,
        value = false,
        icons = null,
        shadow = null,
        ...propsButton
    },
    ref,
) => {
    const { isDisabled = null } = propsButton;
    const { icons: simpleCodeIcons } = React.useContext(SimpleCodeUiContext);
    
    const handleIcon = React.useMemo<TIconEmbedList>(
        () => [simpleCodeIcons.switchHandle],
        [simpleCodeIcons.switchHandle],
    );
    
    const { switchValue, toggle } = useSwitch({ onChange, value, isDisabled });
    
    const buttonStyle: TStyle = React.useMemo<TStyle>(
        () => (style ? [minWidth, style] : minWidth),
        [style],
    );
    
    return (
        <Button
            colors="none"
            justify="flex-start"
            shadow="none"
            onPress={toggle}
            ref={ref}
            size="md"
            shape="none"
        >
            <Button
                {...propsButton}
                icons={icons || handleIcon}
                justify="flex-start"
                direction={switchValue ? 'row-reverse' : 'row'}
                size="xxsm"
                shadow={shadow || 'none'}
                colors={colors || 'secondary'}
                colorsActive={colorsActive || 'tertiary'}
                flexText={1}
                isActive={switchValue}
                style={buttonStyle}
            />
        </Button>
    );
};

export const Switch = React.memo(React.forwardRef(Switch_));
