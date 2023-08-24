import React from 'react';
import {
    Txt, Flex,
} from '../../../src';

import Mobile from '../Mobile';
import { TPropsStoryTxt, TStoryComponent } from '../types';
import {
    StoryTypeColors, StoryTypeTheme, themeArgs, themeArgTypes,
} from '../constants';


export default {
    title: 'Design System/Atoms/Txt',
    component: Txt,
};


export const Default: TStoryComponent<TPropsStoryTxt> = ({
    children = null,
    style = null,
    flex = null,
    font = null,
    size = null,
    lines = null,
    align = null,
    shadow = null,
    colors = null,
    href = null,
    testId = null,
    state = null,
    isDisabled = null,
    isHidden = null,
    isOpaque = null,
    isDecorated = null,
    hasMentions = null,
    ...aux
}) => (
    <Mobile theme={aux['[theme]']} colors={aux['[background]']}>
        <Flex padding={15} flex={1}>
            <Txt
                style={style}
                flex={flex}
                font={font}
                lines={lines}
                align={align}
                shadow={shadow}
                href={href}
                colors={colors}
                testId={testId}
                isDisabled={isDisabled}
                isHidden={isHidden}
                isOpaque={isOpaque}
                isDecorated={isDecorated}
                hasMentions={hasMentions}
                state={state}
            >
                {children}
            </Txt>
        </Flex>
    </Mobile>
);

Default.args = {
    ...themeArgs,
    '[background]': 'secondary',
    children: '[Txt is empty by default]',
    colors: 'primary',
    state: null,
    font: 'regular',
    size: 'md',
    align: 'auto',
    shadow: 'none',
    isDisabled: false,
    isOpaque: false,
    isDecorated: false,
    hasMentions: false,
    isHidden: false,
    flex: -1,
    lines: 0,
    style: {},
    href: '',
    onPress: () => undefined,
    testId: '',
};

Default.argTypes = {
    '[background]': StoryTypeColors,
    children: {
        control: {
            type: 'text',
        },
    },
    ...themeArgTypes,
    '[theme]': StoryTypeTheme,
    font: {
        control: {
            type: 'select',
        },
        options: [
            'regular',
            'semi',
            'bold',
            'mono',
        ],
    },
    align: {
        control: {
            type: 'select',
        },
        options: [
            'auto',
            'left',
            'right',
            'center',
            'justify',
        ],
    },
    shadow: {
        control: {
            type: 'select',
        },
        options: [
            'none',
            'sm',
            'md',
        ],
    },
    colors: StoryTypeColors,
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
    lines: {
        control: {
            type: 'number',
            min: 0,
            max: 999,
            step: 1,
        },
    },
    href: {
        control: {
            type: 'text',
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
    isOpaque: {
        control: {
            type: 'boolean',
        },
    },
    isDecorated: {
        control: {
            type: 'boolean',
        },
    },
    hasMentions: {
        control: {
            type: 'boolean',
        },
    },
    style: {
        control: {
            type: 'object',
        },
    },
    testId: {
        control: {
            type: 'text',
        },
    },
};

export const WithMention: TStoryComponent<TPropsStoryTxt> = (props) => Default(props);
WithMention.args = {
    ...Default.args,
    hasMentions: true,
    children: 'Text with a @Mention and a @Very Long Mention.',
};

WithMention.argTypes = Default.argTypes;

export const WithEscape: TStoryComponent<TPropsStoryTxt> = (props) => Default(props);
WithEscape.args = {
    ...Default.args,
    isDecorated: true,
    children: 'Some basic <span>HTML</span> escaping is supported, e.g.:<br/>&lt; &beta; &laquo; &#x1F354;',
};

WithEscape.argTypes = Default.argTypes;
