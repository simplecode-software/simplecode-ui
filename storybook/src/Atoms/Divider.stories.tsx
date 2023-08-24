import React from 'react';
import {
    Divider, Flex,
} from '../../../src';

import {
    StoryTypeSizes,
} from '../constants';
import Mobile from '../Mobile';
import { Default as FlexStory } from './Flex.stories';
import { TPropsStoryDivider, TStoryComponent } from '../types';


export default {
    title: 'Design System/Atoms/Divider',
    component: Divider,
};


export const Default: TStoryComponent<TPropsStoryDivider> = ({
    size = null,
    padding = null,
    style = null,
    flex = null,
    isHidden = false,
    shape = null,
    shadow = null,
    colors = null,
    testId = null,
    ...aux
}) => (
    <Mobile theme={aux['[theme]']} colors={aux['[background]']}>
        <Flex padding={15} flex={1}>
            <Divider
                size={size}
                padding={padding}
                style={style}
                flex={flex}
                isHidden={isHidden}
                shape={shape}
                shadow={shadow}
                colors={colors}
                testId={testId}
            />
        </Flex>
    </Mobile>
);

Default.args = {
    '[theme]': FlexStory.args['[theme]'],
    ...FlexStory.args,
    '[background]': 'primary',
    size: 'md',
    colors: 'secondary',
    shape: 'none',
    flex: -1,
    padding: '0',
    style: {},
    isHidden: false,
    shadow: 'none',
    testId: null,
};

Default.argTypes = {
    size: StoryTypeSizes,
    ...FlexStory.argTypes,
};

export const Lg: TStoryComponent<TPropsStoryDivider> = (props) => Default(props);
Lg.args = {
    ...Default.args,
    size: 'lg',
};
Lg.argTypes = Default.argTypes;

export const Xxlg: TStoryComponent<TPropsStoryDivider> = (props) => Default(props);
Xxlg.args = {
    ...Default.args,
    size: 'xxlg',
};
Xxlg.argTypes = Default.argTypes;
