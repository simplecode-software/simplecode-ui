import React from 'react';

import { Flex } from '../Flex';
import { Divider } from '../Divider';
import { ListItem } from '../ListItem';
import { TButtonOnPress, TPropsSection } from '../types';


const Section_: React.ForwardRefRenderFunction<unknown, TPropsSection> = (
    {
        // unused
        select = null,
        
        // header
        size = null,
        sizeText = null,
        icons = null,
        label = null,
        lines = null,
        children = null,
        header = null,
        flexText = null,
        font = null,
        shadowText = null,
        colors = null,
        href = null,
        onPress = null,
        isActive = null,
        isDisabled = null,
        buttonGroup = null,
        justify = null,
        align = null,
        divider = null,
        
        ...propsFlex
    }: TPropsSection,
    ref,
) => {
    const press: TButtonOnPress = React.useCallback(
        (e, name) => {
            if (typeof name === 'string' && onPress) {
                onPress(e, name);
            }
        },
        [onPress],
    );
    
    return (
        <>
            <Flex
                ref={ref}
                {...propsFlex}
            >
                <ListItem
                    size={size || 'xsm'}
                    icons={icons}
                    label={label}
                    lines={lines}
                    flexText={flexText}
                    font={font || 'semi'}
                    sizeText={sizeText || 'lg'}
                    shadowText={shadowText}
                    colors={colors}
                    href={href}
                    isActive={isActive}
                    isDisabled={isDisabled}
                    justify={justify}
                    align={align}
                    buttonGroup={buttonGroup}
                    onPress={onPress && press}
                >
                    {header}
                </ListItem>
                {children}
            </Flex>
            {!!divider && (
                <Divider {...divider} />
            )}
        </>
    );
};

export const Section = React.memo(React.forwardRef(Section_));
