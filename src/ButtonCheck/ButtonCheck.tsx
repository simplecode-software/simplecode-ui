
import React from 'react';

import { Button } from '../Button';
import { SimpleCodeUiContext } from '../SimpleCodeUiContext';
import {
    TColorsProp,
    TIconEmbed,
    TIconEmbedList,
    TPropsCheckbox,
    TSpecSize,
} from '../types';


const buttonPaddings: Readonly<Record<TSpecSize, string>> = {
    xxsm: '5 0',
    xsm: '8 0',
    sm: '10 0',
    md: '12 0',
    lg: '14 0',
    xlg: '16 0',
    xxlg: '19 0',
    auto: '12 0',
};

const iconSizes: Readonly<Record<TSpecSize, number>> = {
    xxsm: 18,
    xsm: 18,
    sm: 20,
    md: 22,
    lg: 24,
    xlg: 26,
    xxlg: 26,
    auto: 26,
};

const iconMargins: Readonly<Record<TSpecSize, string>> = {
    xxsm: '0 6 0 6',
    xsm: '0 6 0 6',
    sm: '0 6 0 6',
    md: '0 6 0 6',
    lg: '1 6 0 6',
    xlg: '1 6 0 6',
    xxlg: '1 6 0 6',
    auto: '0 6 0 6',
};

type TIconPair = Readonly<{
    inactive: TIconEmbedList;
    active: TIconEmbedList;
}>;

const getIconPair = (
    iconOn: TIconEmbed,
    iconOff: TIconEmbed,
    size: TSpecSize,
): TIconPair => {
    return {
        active: [{
            ...iconOn,
            sizeIcon: iconSizes[size],
            margin: iconMargins[size],
        }],
        inactive: [{
            ...iconOff,
            sizeIcon: iconSizes[size],
            margin: iconMargins[size],
        }],
    };
};

const getColoredIcon = (initial: TIconEmbedList, colors: TColorsProp | null = null): TIconEmbedList => {
    if (!colors) {
        return initial;
    }
    return [{ ...initial[0], colors }];
};

type TSizedIcons = Readonly<Record<TSpecSize, TIconPair>>;


const ButtonCheck_: React.ForwardRefRenderFunction<unknown, TPropsCheckbox> = (
    {
        icons = null,
        iconsActive = null,
        colors = null,
        alignText = null,
        shape = null,
        shadow = null,
        justify = null,
        align = null,
        direction = null,
        lines = null,
        padding = null,
        sizeText = null,
        size = null,
        colorsIcon = null,
        ...propsButton
    }: TPropsCheckbox,
    ref,
) => {
    const { icons: simpleCodeIcons } = React.useContext(SimpleCodeUiContext);
    
    const sizeTextFinal = sizeText || size || 'md';
    
    
    const sizedIcons = React.useMemo<TSizedIcons>(
        () => ({
            xxsm: getIconPair(simpleCodeIcons.checkboxOn, simpleCodeIcons.checkboxOff, 'xxsm'),
            xsm: getIconPair(simpleCodeIcons.checkboxOn, simpleCodeIcons.checkboxOff, 'xsm'),
            sm: getIconPair(simpleCodeIcons.checkboxOn, simpleCodeIcons.checkboxOff, 'sm'),
            md: getIconPair(simpleCodeIcons.checkboxOn, simpleCodeIcons.checkboxOff, 'md'),
            lg: getIconPair(simpleCodeIcons.checkboxOn, simpleCodeIcons.checkboxOff, 'lg'),
            xlg: getIconPair(simpleCodeIcons.checkboxOn, simpleCodeIcons.checkboxOff, 'xlg'),
            xxlg: getIconPair(simpleCodeIcons.checkboxOn, simpleCodeIcons.checkboxOff, 'xxlg'),
            auto: getIconPair(simpleCodeIcons.checkboxOn, simpleCodeIcons.checkboxOff, 'auto'),
        }),
        [simpleCodeIcons],
    );

    
    const checkActive: TIconEmbedList = React.useMemo(
        () => getColoredIcon(sizedIcons[sizeTextFinal].active, colorsIcon),
        [colorsIcon, sizeTextFinal, sizedIcons],
    );
    
    const checkEmpty: TIconEmbedList = React.useMemo(
        () => getColoredIcon(sizedIcons[sizeTextFinal].inactive, colorsIcon),
        [colorsIcon, sizeTextFinal, sizedIcons],
    );
    
    return (
        <Button
            ref={ref}
            {...propsButton}
            icons={icons || checkEmpty}
            iconsActive={iconsActive || checkActive}
            colors={colors || 'primarytext'}
            alignText={alignText || 'left'}
            shape={shape || 'none'}
            shadow={shadow || 'none'}
            justify={justify || 'flex-start'}
            align={align || 'flex-start'}
            direction={direction || 'row'}
            lines={lines ?? 0}
            padding={padding ?? buttonPaddings[sizeTextFinal]}
            sizeText={sizeTextFinal}
            size="auto" // must be auto for correct icon display
        />
    );
};

export const ButtonCheck = React.memo(React.forwardRef(ButtonCheck_));
