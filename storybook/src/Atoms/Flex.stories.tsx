import React from 'react';
import {
    Flex, Txt,
} from '../../../src';

import {
    StoryTypeBorder,
    StoryTypeColors,
    StoryTypeShadow,
    StoryTypeShape,
    themeArgs,
    themeArgTypes,
} from '../constants';
import Mobile from '../Mobile';
import { TPropsStoryFlex, TStoryComponent } from '../types';


export default {
    title: 'Design System/Atoms/Flex',
    component: Flex,
};


export const Default: TStoryComponent<TPropsStoryFlex> = ({
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
}: TPropsStoryFlex) => (
    <Mobile theme={aux['[theme]']} colors={aux['[background]']}>
        <Flex padding={15} flex={1}>
            <Flex
                padding={padding}
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
            >
                <Txt margin={15}>content 1</Txt>
                <Txt margin={15}>content 2</Txt>
            </Flex>
        </Flex>
    </Mobile>
);

Default.args = {
    ...themeArgs,
    '[background]': 'secondary',
    colors: 'none',
    state: null,
    direction: 'column',
    justify: 'flex-start',
    align: 'stretch',
    shape: 'none',
    border: 'none',
    shadow: 'none',
    padding: '0',
    isDisabled: false,
    isHidden: false,
    style: {},
    flex: -1,
    href: '',
    onPress: () => undefined,
    onPressIn: () => undefined,
    onPressOut: () => undefined,
    children: null,
    testId: '',
};

Default.argTypes = {
    '[background]': StoryTypeColors,
    ...themeArgTypes,
    direction: {
        control: {
            type: 'inline-radio',
        },
        options: [
            'column',
            'row',
            'column-reverse',
            'row-reverse',
        ],
    },
    justify: {
        control: {
            type: 'select',
        },
        options: [
            'flex-start',
            'flex-end',
            'center',
            'space-between',
            'space-around',
            'space-evenly',
        ],
    },
    align: {
        control: {
            type: 'select',
        },
        options: [
            'flex-start',
            'flex-end',
            'center',
            'stretch',
            'baseline',
        ],
    },
    shape: StoryTypeShape,
    border: StoryTypeBorder,
    shadow: StoryTypeShadow,
    colors: StoryTypeColors,
    padding: {
        control: {
            type: 'text',
        },
    },
    margin: {
        control: {
            type: 'text',
        },
    },
    state: {
        control: {
            type: 'inline-radio',
        },
        options: [
            null,
            'hover',
            'active',
        ],
    },
    flex: {
        control: {
            type: 'number',
            min: -1,
            max: 999,
            step: 1,
        },
    },
    isDisabled: {
        control: {
            type: 'boolean',
        },
    },
    isHidden: {
        control: {
            type: 'boolean',
        },
    },
    style: {
        control: {
            type: 'object',
        },
    },
    href: {
        control: {
            type: 'text',
        },
    },
    testId: {
        control: {
            type: 'text',
        },
    },
};
