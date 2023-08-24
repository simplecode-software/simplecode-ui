import React from 'react';

import { ButtonGroup } from '../ButtonGroup';
import type {
    TButtonGroupEmbed, TSpecSize, TThemeContext, TStyle, TPropsListItem, TButtonGroupOnPress,
} from '../types';
import { Button } from '../Button';
import { ThemeContext } from '../ThemeContext';
import { Flex } from '../Flex';


const buttonSizes: Readonly<Record<TSpecSize, TSpecSize>> = {
    xxsm: 'xsm',
    xsm: 'sm',
    sm: 'sm',
    md: 'sm',
    lg: 'md',
    xlg: 'lg',
    xxlg: 'lg',
    auto: 'md',
};


const ListItem_: React.ForwardRefRenderFunction<unknown, TPropsListItem> = (
    {
        name = null,
        size = null,
        sizeText = null,
        sizeIcons = null,
        alignText = null,
        icons = null,
        children = null,
        style = null,
        font = null,
        shape = null,
        shadow = null,
        colors = null,
        onPressButton = null,
        isDisabled = false,
        buttonGroup = null,
        direction = null,
        justify = null,
        ...propsButton
    }: TPropsListItem,
    ref,
) => {
    const pressButton: TButtonGroupOnPress = React.useCallback(
        (e, buttonName) => {
            if (onPressButton) {
                e.stopPropagation();
                onPressButton(e, buttonName, name);
            }
        },
        [name, onPressButton],
    );
    
    const sizeFinal = size || 'md';
    
    const buttonGroupProps: TButtonGroupEmbed | null = React.useMemo(
        () => (
            (buttonGroup && {
                ...buttonGroup,
                isDisabled: isDisabled || buttonGroup.isDisabled,
                size: buttonGroup.size || buttonSizes[sizeFinal],
                colors: buttonGroup.colors || 'primarytext',
                shadow: buttonGroup.shadow || 'none',
                flex: buttonGroup.flex ?? -1,
            }) ||
            null
        ),
        [buttonGroup, isDisabled, sizeFinal],
    );
    
    const themeContext: TThemeContext = React.useContext(ThemeContext);
    
    const containerStyle: TStyle = React.useMemo(
        () => {
            const size: number | null = themeContext.getSize(sizeFinal, 'item');
            return [
                { minWidth: size || undefined, height: size || undefined },
                style,
            ];
        },
        [themeContext, sizeFinal, style],
    );
    
    const finalShadow = shadow || 'none';
    
    return (
        <Button
            ref={ref}
            {...propsButton}
            name={name}
            size="auto"
            sizeText={sizeText || sizeFinal}
            sizeIcons={sizeIcons || sizeFinal}
            icons={icons}
            style={containerStyle}
            font={font || 'regular'}
            shape={shape || 'none'}
            shadow={finalShadow}
            colors={colors || (finalShadow === 'none' ? 'primarytext' : 'primary')}
            direction={direction || (sizeFinal === 'auto' ? 'column' : 'row')}
            justify={justify || 'space-between'}
            alignText={alignText || 'left'}
        >
            {children || <Flex colors="none" />}
            {buttonGroupProps && (
                <Flex colors="none">
                    <ButtonGroup {...buttonGroupProps} onPress={pressButton} />
                </Flex>
            )}
        </Button>
    );
};


export const ListItem = React.memo(React.forwardRef(ListItem_));
