import React from 'react';
import {
    Icon, Flex, TAnyComponent, TDict,
} from '../../../src';

import Mobile from '../Mobile';
import { Default as FlexStory } from './Flex.stories';
import { Default as TxtStory } from './Txt.stories';
import { TPropsStoryIcon, TStoryComponent } from '../types';
import { StoryTypeIconSet } from '../constants';


export default {
    title: 'Design System/Atoms/Icon',
    component: Icon,
};

const componentMap: TDict<TAnyComponent> = {
    
};


export const Default: TStoryComponent<TPropsStoryIcon> = ({
    size = null,
    sizeIcon = null,
    rotation = null,
    shadowIcon = null,
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
    Component = null,
    ...aux
}) => (
    <Mobile theme={aux['[theme]']} colors={aux['[background]']}>
        <Flex padding={15} flex={1} align="center">
            <Icon
                Component={componentMap[Component || 'Ionicons']}
                size={size}
                sizeIcon={sizeIcon}
                rotation={rotation}
                shadowIcon={shadowIcon}
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

const { Component: _Component, ...spreadArgs } = FlexStory.args;
Default.args = {
    '[theme]': FlexStory.args['[theme]'],
    '[background]': FlexStory.args['[background]'],
    ...spreadArgs,
    Component: 'Ionicons',
    name: 'call-outline',
    size: 'md',
    sizeIcon: 18,
    rotation: 0,
    shadowIcon: 'none',
    colors: 'primary',
    onPress: () => undefined,
};

delete Default.args.onPressIn;
delete Default.args.onPressOut;
delete Default.args.direction;
delete Default.args.justify;
delete Default.args.align;

Default.argTypes = {
    Component: StoryTypeIconSet,
    name: {
        control: {
            type: 'text',
        },
    },
    sizeIcon: {
        control: {
            type: 'number',
            min: 12,
            max: 999,
            step: 1,
        },
    },
    size: {
        control: {
            type: 'select',
        },
        options: [
            null,
            'sm',
            'md',
            'lg',
            'xlg',
        ],
    },
    rotation: {
        control: {
            type: 'number',
            min: 0,
            max: 360,
            step: 5,
        },
    },
    shadowIcon: TxtStory.argTypes.shadow,
    ...FlexStory.argTypes,
};

delete Default.argTypes.onPressIn;
delete Default.argTypes.onPressOut;
delete Default.argTypes.direction;
delete Default.argTypes.justify;
delete Default.argTypes.align;


export const Secondary: TStoryComponent<TPropsStoryIcon> = (props) => Default(props);
Secondary.args = {
    ...Default.args,
    colors: 'secondary',
    '[background]': 'primary',
};
Secondary.argTypes = Default.argTypes;

export const Tertiary: TStoryComponent<TPropsStoryIcon> = (props) => Default(props);
Tertiary.args = {
    ...Default.args,
    colors: 'tertiary',
};
Tertiary.argTypes = Default.argTypes;
