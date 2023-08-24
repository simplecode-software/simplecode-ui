import React from 'react';

import type {
    TOnPress, TPropsButton, TSpecSize, TIconEmbedList, TActivityState, TButtonGroupOnPress,
} from '../types';
import { Icon } from '../Icon';
import { useFlag } from '../hooks/use-flag';
import { Flex } from '../Flex';
import { Txt } from '../Txt';
import { getButtonPadding } from './utils/get-button-padding';
import { getIconProps } from './utils/get-icon-props';
import { emptyArray } from '../constants/empty';
import { useButtonStyle } from './hooks/use-button-style';
import { ModalSelect } from '../ModalSelect';


const Button_: React.ForwardRefRenderFunction<unknown, TPropsButton> = (
    {
        name = null,
        icons = null,
        iconsActive = null,
        label = null,
        labelActive,
        lines = null,
        font = null,
        fontActive = null,
        children = null,
        style = null,
        colors = null,
        colorsActive = null,
        onPress = null,
        isActive = null,
        select = null,
        hasMentions = null,
        isDecorated = null,
        direction = null,
        justify = null,
        align = null,
        shape = null,
        shadow,
        size,
        sizeText,
        sizeIcons,
        padding,
        flexText,
        alignText,
        shadowText,
        ...propsFlex
    }: TPropsButton,
    ref,
) => {
    const [isHover, pressIn, pressOut] = useFlag();
    const [isSelectVisible, , hideSelect, toggleSelect] = useFlag();
    
    const sizeFinal: TSpecSize = size || 'md';
    const sizeIconsFinal: TSpecSize = sizeIcons || sizeFinal;
    const isColumn = direction === 'column';
    const isAuto = sizeFinal === 'auto';
    const state: TActivityState = ((isHover && 'hover') || (isActive && 'active') || null);
    const isSelectable = select !== null;
    
    const iconsFinal = isActive ? (iconsActive || icons) : icons;
    const labelFinal = isActive ? (labelActive || label) : label;
    const fontFinal = isActive ? (fontActive || font) : font;
    const colorsFinal = isActive ? (colorsActive || colors) : colors;
    
    const paddingFinal: string | number | null = React.useMemo(
        () => getButtonPadding(isColumn, isAuto, padding ?? null),
        [isAuto, isColumn, padding],
    );
    
    const press: TOnPress = React.useCallback(
        (e) => {
            onPress?.(e, name);
            if (isSelectable) {
                toggleSelect();
            }
        },
        [onPress, isSelectable, name, toggleSelect],
    );
    
    const pressSelect: TButtonGroupOnPress = React.useCallback(
        (e, name) => {
            if (typeof name === 'string' || !name) {
                onPress?.(e, name ?? null);
            }
            hideSelect();
        },
        [hideSelect, onPress],
    );
    
    const [iconLeftProps = null, iconRightProps = null] = React.useMemo<TIconEmbedList>(
        () => {
            if (!iconsFinal || !iconsFinal.length) {
                return emptyArray;
            }
            return getIconProps({
                icons: iconsFinal,
                colors: colorsFinal,
                size: sizeIconsFinal,
                state: state === 'active' && colorsActive ? null : state,
            });
        },
        [iconsFinal, colorsFinal, sizeIconsFinal, state, colorsActive],
    );
    
    const containerStyle = useButtonStyle({ size: sizeFinal, style });
    
    const flexRef = React.useRef<React.ReactElement | null>(null);
    React.useEffect(
        () => {
            if (!ref) {
                return;
            }
            
            if (typeof ref === 'function') {
                ref(flexRef.current);
                return;
            }
            
            // eslint-disable-next-line no-param-reassign
            ref.current = flexRef.current;
        },
        [ref],
    );
    
    return (
        <Flex
            ref={flexRef}
            {...propsFlex}
            direction={direction || 'row'}
            justify={justify || 'center'}
            align={align || 'center'}
            shape={shape || 'rounded'}
            shadow={shadow || 'sm'}
            style={containerStyle}
            colors={colorsFinal || 'primary'}
            onPress={(onPress || isSelectable) ? press : null}
            onPressIn={onPress && pressIn}
            onPressOut={onPress && pressOut}
            padding={paddingFinal}
            state={state === 'active' && colorsActive ? null : state}
        >
            {iconLeftProps && (
                <Icon {...iconLeftProps} />
            )}
            {!!labelFinal && (
                <Txt
                    hasMentions={hasMentions}
                    isDecorated={isDecorated}
                    align={alignText || 'center'}
                    flex={flexText}
                    lines={lines ?? 1}
                    font={fontFinal || 'semi'}
                    size={sizeText || sizeFinal}
                    shadow={shadowText}
                    colors={colorsFinal}
                    state={state}
                >
                    {labelFinal}
                </Txt>
            )}
            {children}
            {iconRightProps && (
                <Icon {...iconRightProps} />
            )}
            {select && (
                <ModalSelect
                    {...select}
                    isHidden={!isSelectVisible}
                    onClose={hideSelect}
                    onPress={pressSelect}
                    targetRef={flexRef}
                />
            )}
        </Flex>
    );
};

export const Button = React.memo(React.forwardRef(Button_));
