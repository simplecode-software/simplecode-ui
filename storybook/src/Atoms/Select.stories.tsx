import React from 'react';
import {
    Flex, Select,
} from '../../../src';

import Mobile from '../Mobile';
import { Default as ButtonStory } from './Button.stories';
import { TPropsStorySelect, TStoryComponent } from '../types';


export default {
    title: 'Design System/Atoms/Select',
    component: Select,
};


export const Default: TStoryComponent<TPropsStorySelect> = ({
    variant = null,
    options = null,
    active = null,
    placeholder = null,
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
    return (
        <Mobile theme={aux['[theme]']} colors={aux['[background]']}>
            <Flex padding={15} flex={1}>
                <Select
                    variant={variant}
                    options={options}
                    active={active}
                    placeholder={placeholder}
                    label={label}
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
            </Flex>
        </Mobile>
    );
};

Default.args = {
    variant: 'ghost',
    options: null,
    active: '',
    placeholder: '',
    ...ButtonStory.args,
    '[background]': 'primary',
    label: '[select is empty by default]',
    colors: null,
    font: null,
    shape: 'md',
    shadow: 'none',
    align: null,
    justify: 'flex-start',
    alignText: 'left',
};


Default.argTypes = {
    options: {
        control: {
            type: 'object',
        },
    },
    active: {
        control: {
            type: 'text',
        },
    },
    placeholder: {
        control: {
            type: 'text',
        },
    },
    variant: {
        control: {
            type: 'select',
        },
        options: [
            'ghost',
            'text',
        ],
    },
    ...ButtonStory.argTypes,
};

export const Ghost: TStoryComponent<TPropsStorySelect> = (props) => Default(props);

Ghost.args = {
    ...Default.args,
    label: '',
    variant: 'ghost',
    options: [
        { name: 'one', label: 'One' },
        { name: 'two', label: 'Two' },
        { name: 'three', label: 'Three' },
        { name: 'four', label: 'Four' },
        { name: 'five', label: 'Five' },
    ],
    active: 'two',
};
Ghost.argTypes = Default.argTypes;

export const Text: TStoryComponent<TPropsStorySelect> = (props) => Default(props);

Text.args = {
    ...Ghost.args,
    variant: 'text',
};
Text.argTypes = Default.argTypes;
