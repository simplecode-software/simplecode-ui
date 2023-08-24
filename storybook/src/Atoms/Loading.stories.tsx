import React from 'react';
import {
    Flex, Loading,
} from '../../../src';

import Mobile from '../Mobile';
import { Default as ButtonStory } from './Button.stories';
import { TPropsStoryLoading, TStoryComponent } from '../types';


export default {
    title: 'Design System/Atoms/Loading',
    component: Loading,
};


export const Default: TStoryComponent<TPropsStoryLoading> = ({
    label = null,
    size = null,
    sizeText = null,
    font = null,
    shadowText = null,
    isActive = null,
    lines = null,
    flexText = null,
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
            <Flex flex={1}>
                <Loading
                    label={label}
                    size={size}
                    sizeText={sizeText}
                    font={font}
                    shadowText={shadowText}
                    isActive={isActive}
                    lines={lines}
                    flexText={flexText}
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
    flex: 1,
    direction: 'column',
    shape: null,
    shadow: null,
    align: null,
    colors: null,
    label: '',
    font: 'regular',
    shadowText: 'none',
    border: 'none',
};


Default.argTypes = {
    ...ButtonStory.argTypes,
};

export const Labeled: TStoryComponent<TPropsStoryLoading> = (props) => Default(props);
Labeled.args = {
    ...Default.args,
    label: 'Loading...',
};
Labeled.argTypes = Default.argTypes;
