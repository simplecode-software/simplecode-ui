import React from 'react';

import type {
    TListItemEmbed, TListItemEmbedList, TRenderItemFn,
} from '../types';
import { ListItem } from '../ListItem';
import { Divider } from '../Divider';
import { usePressButtons } from '../hooks/use-press-buttons';
import { emptyArray } from '../constants/empty';
import { ListProgressive } from '../ListProgressive';
import { Flex } from '../Flex';
import { TPropsList } from './types';


const List_: React.ForwardRefRenderFunction<unknown, TPropsList> = (
    {
        // unused
        name = null,
        label = null,
        labelActive = null,
        isActive = null,
        select = null,
        href = null,
        
        // Button
        size = null,
        sizeText = null,
        sizeIcons = null,
        alignText = null,
        hasMentions = null,
        isDecorated = null,
        icons = null,
        iconsActive = null,
        shadowText = null,
        flexText = null,
        lines = null,
        font = null,
        fontActive = null,
        colorsActive = null,
        
        // ListItem
        onPress = null,
        onPressButton = null,
        buttonGroup = null,
        
        // List
        active = null,
        behavior = null,
        divider = null,
        
        // ListProgressive
        items = null,
        onRenderItem = null,
        countInitial = null,
        countBatch = null,
        interval = null,
        
        // Per-item flex
        border = null,
        shadow = null,
        shape = null,
        
        direction = null,
        justify = null,
        align = null,
        colors = null,
        isDisabled = null,
        
        ...propsFlex
    }: TPropsList,
    ref,
) => {
    const press = usePressButtons({ onPress, active, behavior });
    const pressButton = usePressButtons({ onPress: onPressButton, active, behavior });
    
    const modifiedItems = React.useMemo<TListItemEmbedList>(
        () => {
            if (!items) {
                return emptyArray;
            }
            return items.map((item) => {
                if (!item) {
                    return null;
                }
                const isActive = (
                    active && (
                        (typeof active === 'string' && active === item.name) ||
                        (typeof active !== 'string' && active.includes(item.name ?? null))
                    )
                ) || false;
                const mergedItem: TListItemEmbed = {
                    ...item,
                    isActive: colorsActive ? false : isActive,
                    icons: item.icons || icons,
                    iconsActive: item.iconsActive || iconsActive,
                    size: item.size || size,
                    sizeText: item.sizeText || sizeText,
                    sizeIcons: item.sizeIcons || sizeIcons,
                    colors: (isActive && colorsActive) || item.colors || colors,
                    isDisabled: item.isDisabled || isDisabled,
                    flex: item.flex,
                    flexText: item.flexText ?? flexText,
                    font: (isActive && fontActive) || item.font || font,
                    border: item.border || border,
                    shadow: item.shadow || shadow,
                    shape: item.shape || shape,
                    alignText: item.alignText || alignText,
                    buttonGroup: item.buttonGroup || buttonGroup,
                    shadowText: item.shadowText || shadowText,
                    lines: item.lines || lines,
                    hasMentions: item.hasMentions || hasMentions,
                    isDecorated: item.isDecorated || isDecorated,
                };
                return mergedItem;
            });
        },
        [
            items, active, colorsActive, icons, iconsActive, size, sizeText, sizeIcons,
            colors, isDisabled, flexText, fontActive, font, border, shadow, shape,
            alignText, buttonGroup, shadowText, lines, hasMentions, isDecorated,
        ],
    );
    
    const defaultRenderItem: TRenderItemFn<TListItemEmbed> = React.useCallback(
        (item, i) => {
            return (
                <React.Fragment key={item.name}>
                    <ListItem
                        key={item.name}
                        {...item}
                        onPress={onPress && press}
                        onPressButton={onPressButton && pressButton}
                    />
                    {!!divider && i < modifiedItems.length - 1 && (
                        <Divider {...divider} />
                    )}
                </React.Fragment>
            );
        },
        [divider, modifiedItems.length, onPress, onPressButton, press, pressButton],
    );
    
    return (
        <Flex
            ref={ref}
            {...propsFlex}
            direction={direction || 'column'}
            justify={justify || 'flex-start'}
            align={align || (direction === 'row' ? 'center' : 'stretch')}
        >
            <ListProgressive
                items={modifiedItems}
                countBatch={countBatch}
                interval={interval}
                onRenderItem={onRenderItem || defaultRenderItem}
                countInitial={countInitial ?? -1}
            />
        </Flex>
    );
};

export const List = React.memo(React.forwardRef(List_));
