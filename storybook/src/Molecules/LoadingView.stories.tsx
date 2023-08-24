import React from 'react';
import {
    Flex, Txt, LoadingView,
} from '../../../src';

import Mobile from '../Mobile';
import { Default as LoadingStory } from '../Atoms/Loading.stories';
import { TPropsStoryLoadingView, TStoryComponent } from '../types';
import { StoryTypeColors } from '../constants';


export default {
    title: 'Design System/Molecules/LoadingView',
    component: LoadingView,
};


export const Default: TStoryComponent<TPropsStoryLoadingView> = ({
    isLoading = null,
    colorsContainer = null,
    label = null,
    padding = null,
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
                <LoadingView
                    padding={padding}
                    isLoading={isLoading}
                    colorsContainer={colorsContainer}
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
                >
                    <Txt>
                        [By default, isLoading = false]
                    </Txt>
                </LoadingView>
            </Flex>
        </Mobile>
    );
};

Default.args = {
    '[theme]': LoadingStory.args['[theme]'],
    '[background]': LoadingStory.args['[background]'],
    isLoading: false,
    colorsContainer: 'secondary',
    ...LoadingStory.args,
    direction: 'column',
};


Default.argTypes = {
    ...LoadingStory.argTypes,
    isLoading: {
        control: {
            type: 'boolean',
        },
    },
    colorsContainer: StoryTypeColors,
};

export const Primary: TStoryComponent<TPropsStoryLoadingView> = (props) => Default(props);
Primary.args = {
    ...Default.args,
    isLoading: true,
    colorsContainer: 'primary',
};
Primary.argTypes = Default.argTypes;
