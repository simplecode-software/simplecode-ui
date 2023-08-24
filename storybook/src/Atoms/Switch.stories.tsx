import React from 'react';
import {
    Flex, Switch,
} from '../../../src';

import Mobile from '../Mobile';
import { Default as ButtonStory } from './Button.stories';
import { TPropsStorySwitch, TStoryComponent } from '../types';


export default {
    title: 'Design System/Atoms/Switch',
    component: Switch,
};


export const Default: TStoryComponent<TPropsStorySwitch> = ({
    labelActive = null,
    fontActive = null,
    onChange = null,
    value = null,
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
                <Switch
                    labelActive={labelActive}
                    fontActive={fontActive}
                    onChange={onChange}
                    value={value}
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
    ...ButtonStory.args,
    '[background]': 'primary',
    labelActive: null,
    fontActive: null,
    onChange: null,
    value: null,
    align: null,
    label: '',
    colors: null,
    colorsActive: null,
    shadow: null,
    justify: null,
    size: null,
    style: null,
    direction: null,
};


Default.argTypes = {
    labelActive: ButtonStory.argTypes.label,
    fontActive: ButtonStory.argTypes.font,
    value: {
        control: {
            type: 'boolean',
        },
    },
    ...ButtonStory.argTypes,
};

export const Label: TStoryComponent<TPropsStorySwitch> = (props) => Default(props);

Label.args = {
    ...Default.args,
    label: 'Label',
};
Label.argTypes = Default.argTypes;

export const ActiveLabel: TStoryComponent<TPropsStorySwitch> = (props) => Default(props);

ActiveLabel.args = {
    ...Default.args,
    label: 'Label',
    labelActive: 'ActiveLabel',
    value: true,
};
ActiveLabel.argTypes = Default.argTypes;
