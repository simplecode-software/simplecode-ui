import React from 'react';
import times from 'lodash/fp/times';
import {
    ListItem, Flex,
} from '../../../src';

import Mobile from '../Mobile';
import { Default as ButtonStory } from './Button.stories';
import { StoryTypeColors } from '../constants';
import { TPropsStoryListItem, TStoryComponent } from '../types';


export default {
    title: 'Design System/Atoms/ListItem',
    component: ListItem,
};


export const Default: TStoryComponent<TPropsStoryListItem> = ({
    buttonGroup = null,
    label = null,
    size = null,
    sizeText = null,
    font = null,
    shadowText = null,
    isActive = null,
    lines = null,
    flexText = null,
    icons = null,
    name = null,
    style = null,
    flex = null,
    direction = null,
    justify = null,
    align = null,
    shape = null,
    border = null,
    shadow = null,
    href = null,
    colors = null,
    testId = null,
    isDisabled = null,
    isHidden = null,
    state = null,
    onPress = null,
    ...aux
}) => {
    const buttons = aux['[buttons]'];
    const count = aux['[count]'];
    
    const finalGroup = React.useMemo(
        () => {
            if (!buttonGroup) {
                return null;
            }
            return {
                ...buttonGroup,
                colors: buttonGroup.colors || buttons,
            };
        },
        [buttonGroup, buttons],
    );
    
    return (
        <Mobile theme={aux['[theme]']} colors={aux['[background]']}>
            <Flex padding={15} flex={1}>
                {times((i) => (
                    <ListItem
                        key={i}
                        buttonGroup={finalGroup}
                        label={(count && count > 1) ? `${i + 1}. ${label}` : label}
                        size={size}
                        sizeText={sizeText}
                        font={font}
                        shadowText={shadowText}
                        isActive={isActive}
                        lines={lines}
                        flexText={flexText}
                        icons={icons}
                        name={name}
                        style={style}
                        flex={flex}
                        direction={direction}
                        justify={justify}
                        align={align}
                        shape={shape}
                        border={border}
                        shadow={shadow}
                        href={href}
                        colors={colors}
                        testId={testId}
                        isDisabled={isDisabled}
                        isHidden={isHidden}
                        state={state}
                        onPress={onPress}
                    />
                ), count || 1)}
            </Flex>
        </Mobile>
    );
};

Default.args = {
    ...ButtonStory.args,
    buttonGroup: null,
    shape: 'none',
    shadow: 'none',
    align: null,
    colors: 'primarytext',
    justify: 'space-between',
    label: '[ListItem is empty by default]',
};


Default.argTypes = {
    buttonGroup: {
        control: {
            type: 'object',
        },
    },
    ...ButtonStory.argTypes,
};

export const WithButtons: TStoryComponent<TPropsStoryListItem> = (props) => Default(props);
WithButtons.args = {
    ...Default.args,
    label: 'WithButtons',
    buttonGroup: {
        buttons: [
            {
                name: 'A',
                label: 'A',
            },
            {
                name: 'B',
                label: 'B',
            },
            {
                name: 'C',
                label: 'C',
            },
        ],
    },
};
WithButtons.argTypes = Default.argTypes;


export const Many: TStoryComponent<TPropsStoryListItem> = (props) => Default(props);
Many.args = {
    '[count]': 2,
    '[buttons]': null,
    ...WithButtons.args,
    label: 'Many',
};
Many.argTypes = {
    '[count]': {
        control: {
            type: 'number',
            min: 1,
            max: 4,
            step: 1,
        },
    },
    '[buttons]': StoryTypeColors,
    ...WithButtons.argTypes,
};
