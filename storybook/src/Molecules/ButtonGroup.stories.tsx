import React from 'react';
import {
    ButtonGroup, Flex,
} from '../../../src';

import Mobile from '../Mobile';
import { Default as ButtonStory } from '../Atoms/Button.stories';
import { TPropsStoryButtonGroup, TStoryComponent } from '../types';


export default {
    title: 'Design System/Molecules/ButtonGroup',
    component: ButtonGroup,
};


export const Default: TStoryComponent<TPropsStoryButtonGroup> = ({
    active = null,
    behavior = null,
    colorsActive = null,
    fontActive = null,
    spacing = null,
    buttons = null,
    size = null,
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
}) => (
    <Mobile theme={aux['[theme]']} colors={aux['[background]']}>
        <Flex padding={15} flex={1}>
            <ButtonGroup
                active={active}
                behavior={behavior}
                colorsActive={colorsActive}
                fontActive={fontActive}
                spacing={spacing}
                buttons={buttons}
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
                onPress={onPress}
            />
        </Flex>
    </Mobile>
);

Default.args = {
    '[theme]': ButtonStory.args['[theme]'],
    '[background]': ButtonStory.args['[background]'],
    active: null,
    behavior: 'button',
    colorsActive: null,
    fontActive: 'semi',
    spacing: 0,
    buttons: [
        {
            name: 'Button1',
            label: 'Button1',
            flex: 1,
        },
        {
            name: 'Btn2',
            label: 'Btn2',
            flex: 1,
        },
        {
            name: 'B3',
            label: 'B4',
            flex: 1,
        },
    ],
    ...ButtonStory.args,
    shape: 'none',
    align: null,
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
    colorsActive: ButtonStory.argTypes.colors,
    fontActive: ButtonStory.argTypes.font,
    spacing: {
        control: {
            type: 'number',
            min: 0,
            max: 999,
            step: 1,
        },
    },
    buttons: {
        control: {
            type: 'object',
        },
    },
    active: {
        control: {
            type: 'object',
        },
    },
    ...ButtonStory.argTypes,
};

delete Default.argTypes.label;
delete Default.argTypes.name;
delete Default.argTypes.isActive;

export const Secondary: TStoryComponent<TPropsStoryButtonGroup> = (props) => Default(props);
Secondary.args = {
    ...Default.args,
    colors: 'secondary',
    '[background]': 'primary',
};
Secondary.argTypes = Default.argTypes;

export const Tertiary: TStoryComponent<TPropsStoryButtonGroup> = (props) => Default(props);
Tertiary.args = {
    ...Default.args,
    colors: 'tertiary',
};
Tertiary.argTypes = Default.argTypes;

export const Rounded: TStoryComponent<TPropsStoryButtonGroup> = (props) => Default(props);
Rounded.args = {
    ...Default.args,
    shape: 'rounded',
};
Rounded.argTypes = Default.argTypes;

export const Spaced: TStoryComponent<TPropsStoryButtonGroup> = (props) => Default(props);
Spaced.args = {
    ...Default.args,
    shape: 'rounded',
    spacing: 4,
};
Spaced.argTypes = Default.argTypes;

export const Column: TStoryComponent<TPropsStoryButtonGroup> = (props) => Default(props);
Column.args = {
    ...Default.args,
    shape: 'rounded',
    spacing: 4,
    direction: 'column',
    size: 'sm',
    buttons: Default.args.buttons?.map((button) => (
        button ? { ...button, flex: 0, name: button.name ?? '' } : null
    )) || null,
};
Column.argTypes = Default.argTypes;
