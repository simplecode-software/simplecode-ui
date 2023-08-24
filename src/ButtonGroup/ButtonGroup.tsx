import React from 'react';

import type {
    TPropsButtonGroup, TButtonOnPress, TButtonPropsList, TPropsButton, TShapeName, TPropsFlex,
} from '../types';
import { usePressButtons } from '../hooks/use-press-buttons';
import { Flex } from '../Flex';
import { emptyArray } from '../constants/empty';
import { ListProgressive } from '../ListProgressive';
import { Button } from '../Button';


const getShape = (
    isColumn: boolean,
    isFirst: boolean,
    isLast: boolean,
    shape: TShapeName | null,
): TShapeName | null => {
    if (shape === null || shape === 'none') {
        return 'none';
    }
    const [baseShape] = shape.split('.') as ReadonlyArray<TShapeName>;
    if (isFirst) {
        if (isColumn) {
            return `${baseShape}.top` as TShapeName;
        }
        return `${baseShape}.left` as TShapeName;
    }
    if (isLast) {
        if (isColumn) {
            return `${baseShape}.bottom` as TShapeName;
        }
        return `${baseShape}.right` as TShapeName;
    }
    return 'none';
};

const getButtonShape = (
    isColumn: boolean,
    buttonShape: TShapeName | null | undefined,
    shape: TShapeName | null | undefined,
    i: number,
    lastI: number,
): TShapeName | null => {
    if (buttonShape) {
        return buttonShape;
    }
    const finalShape = shape || 'none';
    return lastI > 0 ? getShape(isColumn, i === 0, i === lastI, finalShape) : finalShape;
};

const renderItem: (button: TPropsButton) => React.ReactElement = (button) => (
    <Button
        key={button.name}
        {...button}
    />
);


const ButtonGroup_: React.ForwardRefRenderFunction<unknown, TPropsButtonGroup> = (props, ref) => {
    const press = usePressButtons(props);
    
    const {
        name = null,
        countInitial = null,
        countBatch = null,
        interval = null,
        onRenderItem = null,
        colors = null,
        shape = null,
        colorsActive = null,
        direction = null,
        justify = null,
        align = null,
        icons = null,
        iconsActive = null,
        border = null,
        flexText = null,
        lines = null,
        shadowText = null,
        shadow = null,
        buttons = null,
        size = null,
        font = null,
        fontActive = null,
        onPress = null,
        hasMentions = null,
        isDecorated = null,
        sizeText = null,
        isDisabled = null,
        spacing = null,
        active = null,
        ...propsFlex
    }: TPropsButtonGroup = props;
    
    const { flex = null }: TPropsFlex = propsFlex;
    
    const pressNamed: TButtonOnPress = React.useCallback(
        (e, buttonName) => {
            if (press) {
                press(e, buttonName, name);
            }
        },
        [name, press],
    );
    
    const isColumn = direction === 'column' || direction === 'column-reverse';
    
    const modifiedButtons = React.useMemo<TButtonPropsList>(
        () => {
            if (!buttons || !buttons.length) {
                return emptyArray;
            }
            const lastI = buttons.length - 1;
            const finalSpacing = spacing ?? 0;
            const flexBase = isColumn ? null : flex;
            return buttons.map((button, i) => {
                if (!button) {
                    return null;
                }
                const isActive = (
                    active && (
                        (typeof active === 'string' && active === button.name) ||
                        (typeof active !== 'string' && active.includes(button.name))
                    )
                ) || false;
                
                const mergedButton: TPropsButton = {
                    ...button,
                    isActive: colorsActive ? false : isActive,
                    icons: (isActive && iconsActive) || button.icons || icons,
                    size: button.size || size,
                    sizeText: button.sizeText || sizeText,
                    colors: (
                        (isActive && (button.colorsActive || colorsActive)) ||
                        button.colors ||
                        colors
                    ),
                    isDisabled: button.isDisabled || isDisabled,
                    shape: getButtonShape(isColumn, button.shape, shape, i, lastI),
                    flex: button.flex ?? flexBase,
                    flexText: button.flexText ?? flexText,
                    font: (isActive && fontActive) || button.font || font,
                    border: button.border || border,
                    shadow: button.shadow || shadow || 'sm',
                    shadowText: button.shadowText || shadowText,
                    lines: button.lines || lines,
                    style: finalSpacing === 0 ? button.style : [
                        (
                            isColumn
                                ? { marginTop: i !== 0 ? finalSpacing : 0 }
                                : { marginLeft: i !== 0 ? finalSpacing : 0 }
                        ),
                        button.style,
                    ],
                    onPress: onPress ? pressNamed : null,
                    hasMentions: button.hasMentions || hasMentions,
                    isDecorated: button.isDecorated || isDecorated,
                };
                return mergedButton;
            });
        },
        [
            buttons, spacing, active, isColumn, flex, colorsActive,
            iconsActive, icons, size, sizeText, colors, isDisabled, shape, flexText,
            fontActive, font, border, shadow, shadowText, lines, onPress, pressNamed,
            hasMentions, isDecorated,
        ],
    );
    
    return (
        <Flex
            ref={ref}
            {...propsFlex}
            direction={direction || 'row'}
            justify={justify || 'space-between'}
            align={align || (isColumn ? 'stretch' : 'center')}
        >
            <ListProgressive
                items={modifiedButtons}
                onRenderItem={onRenderItem || renderItem}
                countInitial={countInitial}
                countBatch={countBatch}
                interval={interval}
            />
        </Flex>
    );
};

export const ButtonGroup = React.memo(React.forwardRef(ButtonGroup_));
