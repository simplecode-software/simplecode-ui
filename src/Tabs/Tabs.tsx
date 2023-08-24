import React from 'react';

import { ButtonGroup } from '../ButtonGroup';
import { Flex } from '../Flex';
import {
    TButtonEmbedNamed,
    TButtonGroupOnPress,
    TModalSelectEmbed,
    TButtonEmbedNamedList,
    TPropsTabs,
    TIconEmbedList,
} from '../types';
import { emptyArray } from '../constants/empty';
import { SimpleCodeUiContext } from '../SimpleCodeUiContext';


const convertToMainItem = (
    named: TButtonEmbedNamed,
    isScrollable: boolean,
): TButtonEmbedNamed => ({
    ...named,
    name: named.name,
    label: named.label,
    padding: isScrollable ? '0 8' : null,
    shadow: 'none',
    flex: isScrollable ? -1 : null,
});

const convertToHiddenItem = (named: TButtonEmbedNamed): TButtonEmbedNamed => ({
    name: named.name,
    label: named.label,
});


const Tabs_: React.FunctionComponent<TPropsTabs> = ({
    countVisible = null,
    tabs = null,
    active = null,
    onChange = null,
    isDisabled = null,
    spacing = null,
    countInitial = null,
    countBatch = null,
    interval = null,
    shadow = null,
    direction = null,
    colors = null,
    colorsActive = null,
    ...propsFlex
}: TPropsTabs) => {
    const { icons: simpleCodeIcons } = React.useContext(SimpleCodeUiContext);
    
    const caretIcon = React.useMemo<TIconEmbedList>(
        () => [simpleCodeIcons.caretDown],
        [simpleCodeIcons.caretDown],
    );
    
    const activeValue = `${active}`;
    
    const visibleTabs: TButtonEmbedNamedList = React.useMemo<TButtonEmbedNamedList>(
        () => {
            if (countVisible) {
                return tabs?.slice(0, countVisible) ?? emptyArray;
            }
            return tabs ?? emptyArray;
        },
        [countVisible, tabs],
    );
    
    const hiddenTabs = React.useMemo<TButtonEmbedNamedList>(
        () => {
            if (countVisible) {
                return tabs?.slice(countVisible) ?? emptyArray;
            }
            return emptyArray;
        },
        [countVisible, tabs],
    );
    
    const visibleItems = React.useMemo<TButtonEmbedNamedList>(
        () => visibleTabs.map(
            (item) => (item ? convertToMainItem(item, !countVisible) : null),
        ),
        [visibleTabs, countVisible],
    );
    const hiddenItems = React.useMemo<TButtonEmbedNamedList>(
        () => hiddenTabs.map(
            (item) => (item ? convertToHiddenItem(item) : null),
        ),
        [hiddenTabs],
    );
    
    const isMainSelect = React.useMemo<boolean>(
        () => visibleItems.some((item) => (item?.name === activeValue)),
        [activeValue, visibleItems],
    );
    
    const press: TButtonGroupOnPress = React.useCallback(
        (_event, name) => {
            if (typeof name === 'string') {
                if (name === '__more') {
                    return;
                }
                if (onChange) {
                    onChange(name);
                }
            }
        },
        [onChange],
    );
    
    const buttons = React.useMemo<TButtonEmbedNamedList>(
        () => [
            ...visibleItems,
            ...(
                hiddenItems.length > 0
                    ? [{
                        name: '__more',
                        shadow: 'sm',
                        flex: -1,
                        icons: caretIcon,
                        select: {
                            buttons: hiddenItems,
                            active: activeValue,
                        } as TModalSelectEmbed,
                    } as TButtonEmbedNamed]
                    : emptyArray
            ),
        ],
        [visibleItems, hiddenItems, caretIcon, activeValue],
    );
    
    const buttonRow = (
        <ButtonGroup
            flex={countVisible ? 1 : null}
            border="md.bottom"
            colors={colors || 'primary'}
            colorsActive={colorsActive || 'accentghost'}
            font="regular"
            sizeText="sm"
            fontActive="semi"
            onPress={press}
            active={isMainSelect === false ? '__more' : activeValue}
            buttons={buttons}
            isDisabled={isDisabled}
            spacing={spacing}
            countInitial={countInitial}
            countBatch={countBatch}
            interval={interval}
        />
    );
    
    return (
        <Flex
            {...propsFlex}
            shadow={shadow || 'md'}
            direction={direction || 'row'}
            colors={colors || 'primary'}
        >
            {buttonRow}
        </Flex>
    );
};


export const Tabs = React.memo(Tabs_);
