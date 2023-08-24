import React from 'react';
import {
    Button, Flex,
} from '../../../src';

import Mobile from '../Mobile';
import { Default as FlexStory } from './Flex.stories';
import { Default as TxtStory } from './Txt.stories';
import { StoryTypeSizes } from '../constants';
import { TPropsStoryButton, TStoryComponent } from '../types';


export default {
    title: 'Design System/Atoms/Button',
    component: Button,
};

export const Default: TStoryComponent<TPropsStoryButton> = ({
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
                <Button
                    label={label}
                    size={size}
                    sizeText={size}
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
    '[theme]': FlexStory.args['[theme]'],
    '[background]': FlexStory.args['[background]'],
    ...FlexStory.args,
    colors: 'primary',
    label: '[Button has no label by default]',
    size: 'md',
    sizeText: null,
    font: 'semi',
    shadowText: TxtStory.args.shadow,
    flexText: TxtStory.args.flex,
    isActive: false,
    direction: 'row',
    justify: 'center',
    align: 'center',
    shape: 'rounded',
    border: 'none',
    shadow: 'sm',
    lines: 1,
    icons: [],
    name: '',
    href: '',
    onPress: () => undefined,
};

delete Default.args.state;
delete Default.args.onPressIn;
delete Default.args.onPressOut;

Default.argTypes = {
    label: {
        control: {
            type: 'text',
        },
    },
    size: StoryTypeSizes,
    sizeText: StoryTypeSizes,
    font: TxtStory.argTypes.font,
    shadowText: TxtStory.argTypes.shadow,
    isActive: {
        control: {
            type: 'boolean',
        },
    },
    lines: TxtStory.argTypes.lines,
    flexText: TxtStory.argTypes.flex,
    icons: {
        control: {
            type: 'object',
        },
    },
    name: {
        control: {
            type: 'text',
        },
    },
    ...FlexStory.argTypes,
};

delete Default.argTypes.state;
delete Default.argTypes.onPressIn;
delete Default.argTypes.onPressOut;


export const Secondary: TStoryComponent<TPropsStoryButton> = (props) => Default(props);
Secondary.args = {
    ...Default.args,
    colors: 'secondary',
    label: 'Secondary',
    '[background]': 'primary',
};
Secondary.argTypes = Default.argTypes;

export const Tertiary: TStoryComponent<TPropsStoryButton> = (props) => Default(props);
Tertiary.args = {
    ...Default.args,
    colors: 'tertiary',
    label: 'Tertiary',
};
Tertiary.argTypes = Default.argTypes;
