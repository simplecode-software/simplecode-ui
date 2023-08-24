import React from 'react';
import {
    Checkbox, Flex,
} from '../../../src';

import Mobile from '../Mobile';
import { Default as ButtonStory } from './Button.stories';
import { TPropsStoryCheckbox, TStoryComponent } from '../types';


export default {
    title: 'Design System/Atoms/Checkbox',
    component: Checkbox,
};


export const Default: TStoryComponent<TPropsStoryCheckbox> = (
    props: TPropsStoryCheckbox,
) => {
    const { '[theme]': theme, '[background]': background, ...checkProps } = props;
    return (
        <Mobile theme={theme} colors={background}>
            <Flex padding={15} flex={1}>
                <Checkbox {...checkProps} />
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
    shape: 'none',
    shadow: 'none',
    align: null,
    size: 'md',
    label: '',
    colors: 'primarytext',
    justify: 'flex-start',
    alignText: 'left',
};
delete Default.args.icons;

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
delete Default.argTypes.icons;

export const Label: TStoryComponent<TPropsStoryCheckbox> = (props) => Default(props);

Label.args = {
    ...Default.args,
    label: 'Label',
};
Label.argTypes = Default.argTypes;

export const ActiveLabel: TStoryComponent<TPropsStoryCheckbox> = (props) => Default(props);

ActiveLabel.args = {
    ...Default.args,
    label: 'Label',
    labelActive: 'ActiveLabel',
    value: true,
};
ActiveLabel.argTypes = Default.argTypes;
