import React from 'react';

import { Button } from '../Button';
import { emptyString } from '../constants/empty';
import { SimpleCodeUiContext } from '../SimpleCodeUiContext';
import {
    TButtonGroupOnPress,
    TIconEmbedList,
    TModalSelectEmbed,
    TFlexEmbed,
    TTextEmbed,
    TSelectVariant,
    TPropsSelect,
    TColorsProp,
} from '../types';


type TVariantOpts = Readonly<{
    colors: TFlexEmbed['colors'];
    colorsActive: TFlexEmbed['colors'];
    border: TFlexEmbed['border'];
    justify: TFlexEmbed['justify'];
    sizeText: TTextEmbed['size'];
}>;

type TVariantMap = Record<TSelectVariant, TVariantOpts>;

const variantMap: TVariantMap = {
    ghost: {
        colors: 'secondaryghost',
        colorsActive: 'primaryghost',
        border: 'md',
        justify: 'space-between',
        sizeText: 'md',
    },
    text: {
        colors: 'secondarytext',
        colorsActive: 'primarytext',
        border: 'none',
        justify: 'flex-start',
        sizeText: 'sm',
    },
};


const Select_: React.ForwardRefRenderFunction<unknown, TPropsSelect> = (
    {
        label = null,
        placeholder = null,
        active = null,
        options = null,
        onChange = null,
        variant = null,
        colors = null,
        colorsActive = null,
        sizeText = null,
        overlayStyle = null,
        backgroundStyle = null,
        isNonBlocking = null,
        font = null,
        border = null,
        justify = null,
        padding = null,
        icons = null,
        shape = null,
        alignText = null,
        shadow = null,
        ...propsButton
    }: TPropsSelect,
    ref,
) => {
    const { icons: simpleCodeIcons } = React.useContext(SimpleCodeUiContext);
    
    const caretIcon = React.useMemo<TIconEmbedList>(
        () => [null, simpleCodeIcons.caretDown],
        [simpleCodeIcons.caretDown],
    );
    
    const activeValue = `${active}`;
    
    const labelActive: string = React.useMemo(
        () => {
            if (activeValue === null || !(options && options.length)) {
                return emptyString;
            }
            const found = options.find((item) => (item && item.name === activeValue));
            return found ? (found.label || emptyString) : emptyString;
        },
        [options, activeValue],
    );
    
    const press: TButtonGroupOnPress = React.useCallback<TButtonGroupOnPress>(
        (_e, name) => {
            if (name === activeValue) {
                return;
            }
            if ((typeof name === 'string' || name === null) && onChange) {
                const isSelectable = options && options.some((item) => (item && item.name === name));

                if (isSelectable) {
                    onChange(name as string | null);
                }
            }
        },
        [activeValue, onChange, options],
    );
    
    const selectEmbed: TModalSelectEmbed = React.useMemo<TModalSelectEmbed>(
        () => ({
            buttons: options,
            active: activeValue,
            overlayStyle,
            backgroundStyle,
            isNonBlocking,
        }),
        [options, activeValue, overlayStyle, backgroundStyle, isNonBlocking],
    );
    
    const variantOpts: TVariantOpts = variantMap[variant || 'ghost'];
    
    const variantColors: TColorsProp | null | undefined = labelActive
        ? (colorsActive || variantOpts.colorsActive)
        : (colors || variantOpts.colors);
    
    return (
        <Button
            ref={ref}
            {...propsButton}
            label={label || labelActive || placeholder || ' '}
            onPress={press}
            colors={variantColors}
            sizeText={sizeText || variantOpts.sizeText}
            select={selectEmbed}
            font={font || (labelActive ? 'semi' : 'regular')}
            border={border || variantOpts.border}
            justify={justify || variantOpts.justify}
            padding={padding ?? 10}
            icons={icons || caretIcon}
            shape={shape || 'md'}
            alignText={alignText || 'left'}
            shadow={shadow || 'none'}
        />
    );
};


export const Select = React.memo(React.forwardRef(Select_));
