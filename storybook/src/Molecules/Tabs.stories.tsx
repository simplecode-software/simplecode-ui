import React from 'react';
import {
    Tabs,
} from '../../../src';

import Mobile from '../Mobile';
import { Default as FlexStory } from '../Atoms/Flex.stories';
import { TPropsStoryTabs, TStoryComponent } from '../types';


export default {
    title: 'Design System/Molecules/Tabs',
    component: Tabs,
};


export const Default: TStoryComponent<TPropsStoryTabs> = ({
    countVisible = null,
    tabs = null,
    active = null,
    onChange = null,
    padding = null,
    style = null,
    flex = null,
    direction = null,
    justify = null,
    align = null,
    shape = null,
    border = null,
    shadow = null,
    colors = null,
    href = null,
    testId = null,
    isDisabled = null,
    isHidden = null,
    state = null,
    ...aux
}) => {
    return (
        <Mobile theme={aux['[theme]']} colors={aux['[background]']}>
            <Tabs
                countVisible={countVisible}
                tabs={tabs}
                active={active}
                onChange={onChange}
                padding={padding}
                style={style}
                flex={flex}
                direction={direction}
                justify={justify}
                align={align}
                shape={shape}
                border={border}
                shadow={shadow}
                colors={colors}
                href={href}
                testId={testId}
                isDisabled={isDisabled}
                isHidden={isHidden}
                state={state}
            />
        </Mobile>
    );
};

Default.args = {
    '[theme]': FlexStory.args['[theme]'],
    '[background]': FlexStory.args['[background]'],
    countVisible: 0,
    onChange: null,
    active: 't3',
    tabs: [
        {
            name: 't1',
            label: '[1]',
        },
        {
            name: 't2',
            label: '[2]',
        },
        {
            name: 't3',
            label: '[3]',
        },
    ],
    ...FlexStory.args,
    shadow: 'md',
    direction: 'row',
    colors: 'primary',
};

Default.argTypes = {
    '[theme]': FlexStory.args['[theme]'],
    '[background]': FlexStory.args['[background]'],
    countVisible: {
        control: {
            type: 'number',
            min: 0,
            max: 10,
            step: 1,
        },
    },
    tabs: {
        control: {
            type: 'object',
        },
    },
    active: {
        control: {
            type: 'text',
        },
    },
    ...FlexStory.argTypes,
};
