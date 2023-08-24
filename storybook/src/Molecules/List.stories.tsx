import React from 'react';
import {
    List, Flex,
} from '../../../src';

import Mobile from '../Mobile';
import { Default as ListItemStory } from '../Atoms/ListItem.stories';
import { StoryTypeColors } from '../constants';
import { TPropsStoryList, TStoryComponent } from '../types';


export default {
    title: 'Design System/Molecules/List',
    component: List,
};


export const Default: TStoryComponent<TPropsStoryList> = ({
    buttonGroup = null,
    active = null,
    behavior = null,
    colorsActive = null,
    fontActive = null,
    items = null,
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
    divider = null,
    ...aux
}: TPropsStoryList) => {
    const background = aux['[background]'];
    const buttons = aux['[buttons]'];
    
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
        <Mobile>
            <Flex colors={background} padding={15} flex={1}>
                <List
                    buttonGroup={finalGroup}
                    active={active}
                    behavior={behavior}
                    colorsActive={colorsActive}
                    fontActive={fontActive}
                    items={items}
                    size={size}
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
                    divider={divider}
                />
            </Flex>
        </Mobile>
    );
};

Default.args = {
    '[background]': 'secondary',
    active: null,
    behavior: 'button',
    colorsActive: null,
    fontActive: 'semi',
    items: [
        {
            name: 'ListItem1',
            label: 'ListItem1',
        },
        {
            name: 'Item2',
            label: 'Item2',
        },
        {
            name: 'I3',
            label: 'I4',
        },
    ],
    divider: null,
    ...ListItemStory.args,
    direction: 'column',
    shape: 'none',
    align: null,
    colors: 'primarytext',
};

delete Default.args.label;
delete Default.args.name;
delete Default.args.isActive;


Default.argTypes = {
    behavior: {
        control: {
            type: 'select',
        },
        options: [
            'radio',
            'button',
            'checkbox',
        ],
    },
    divider: {
        control: {
            type: 'object',
        },
    },
    active: {
        control: {
            type: 'object',
        },
    },
    items: {
        control: {
            type: 'object',
        },
    },
    colorsActive: ListItemStory.argTypes.colors,
    fontActive: ListItemStory.argTypes.font,
    ...ListItemStory.argTypes,
};

delete Default.argTypes.label;
delete Default.argTypes.name;
delete Default.argTypes.isActive;


export const Divided: TStoryComponent<TPropsStoryList> = (props) => Default(props);
Divided.args = {
    ...Default.args,
    size: 'sm',
    divider: {},
    '[background]': 'primarytext',
};
Divided.argTypes = {
    ...Default.argTypes,
};

export const WithButtons: TStoryComponent<TPropsStoryList> = (props) => Default(props);
WithButtons.args = {
    ...Divided.args,
    '[buttons]': null,
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
WithButtons.argTypes = {
    '[buttons]': StoryTypeColors,
    ...Default.argTypes,
};
