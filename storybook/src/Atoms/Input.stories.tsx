import React from 'react';
import {
    Flex, Input,
} from '../../../src';

import {
    StoryTypeColors, StoryTypeBoolean,
} from '../constants';
import Mobile from '../Mobile';
import { Default as ListItemStory } from './ListItem.stories';
import { TPropsStoryInput, TStoryComponent } from '../types';


export default {
    title: 'Design System/Atoms/Input',
    component: Input,
};


export const Default: TStoryComponent<TPropsStoryInput> = ({
    placeholder = null,
    value = null,
    padding = null,
    colorsPlaceholder = null,
    keyboardType = null,
    autoCapitalize = null,
    max = null,
    initialLines = null,
    autoCorrect = null,
    isBlurOnSubmit = null,
    isAuto = null,
    isMulti = null,
    secureTextEntry = null,
    isReadonly = null,
    children = null,
    onChange = null,
    onPressButton = null,
    onBlur = null,
    onFocus = null,
    buttonGroup = null,
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
    const buttons = aux['[buttons]'];
    
    const finalGroup = React.useMemo(
        () => {
            if (!buttonGroup) {
                return null;
            }
            return {
                ...buttonGroup,
                colors: buttonGroup.colors || buttons,
            };
        },
        [buttonGroup, buttons],
    );
    
    return (
        <Mobile theme={aux['[theme]']} colors={aux['[background]']}>
            <Flex padding={15} flex={1}>
                <Input
                    placeholder={placeholder}
                    value={value}
                    padding={padding}
                    colorsPlaceholder={colorsPlaceholder}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    max={max}
                    initialLines={initialLines}
                    autoCorrect={autoCorrect}
                    isBlurOnSubmit={isBlurOnSubmit}
                    isAuto={isAuto}
                    isMulti={isMulti}
                    secureTextEntry={secureTextEntry}
                    isReadonly={isReadonly}
                    onChange={onChange}
                    onPressButton={onPressButton}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    buttonGroup={finalGroup}
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
    '[theme]': ListItemStory.args['[theme]'],
    '[background]': 'primary',
    value: '[input is empty by default]',
    placeholder: '',
    colors: null,
    colorsPlaceholder: null,
    keyboardType: 'default',
    autoCapitalize: 'sentences',
    max: -1,
    initialLines: 1,
    autoCorrect: true,
    hasMentions: false,
    isBlurOnSubmit: false,
    isAuto: false,
    isMulti: false,
    secureTextEntry: false,
    isReadonly: false,
    onChange: () => undefined,
    onBlur: () => undefined,
    onFocus: () => undefined,
    ...ListItemStory.args,
};

delete Default.args.label;


Default.argTypes = {
    value: {
        control: {
            type: 'text',
        },
    },
    placeholder: {
        control: {
            type: 'text',
        },
    },
    colorsPlaceholder: StoryTypeColors,
    keyboardType: {
        control: {
            type: 'select',
        },
        options: [
            'default',
            'email-address',
            'numeric',
            'phone-pad',
            'number-pad',
            'decimal-pad',
        ],
    },
    autoCapitalize: {
        control: {
            type: 'select',
        },
        options: [
            'none',
            'sentences',
            'words',
            'characters',
        ],
    },
    max: {
        control: {
            type: 'number',
            min: 1,
            max: 999,
            step: 1,
        },
    },
    initialLines: {
        control: {
            type: 'number',
            min: 1,
            max: 999,
            step: 1,
        },
    },
    autoCorrect: StoryTypeBoolean,
    isBlurOnSubmit: StoryTypeBoolean,
    isAuto: StoryTypeBoolean,
    isMulti: StoryTypeBoolean,
    secureTextEntry: StoryTypeBoolean,
    isReadonly: StoryTypeBoolean,
    hasMentions: StoryTypeBoolean,
    ...ListItemStory.argTypes,
};

export const Bordered: TStoryComponent<TPropsStoryInput> = (props) => Default(props);
Bordered.args = {
    ...Default.args,
    value: '',
    placeholder: 'Bordered',
    align: 'center',
    border: 'md',
    colors: 'primaryghost',
    shape: 'md',
    size: 'sm',
    sizeText: 'md',
    padding: '0 10 0 10',
    '[background]': 'primarytext',
    
};
Bordered.argTypes = Default.argTypes;


export const WithButtons: TStoryComponent<TPropsStoryInput> = (props) => Default(props);
WithButtons.args = {
    ...Bordered.args,
    placeholder: 'WithButtons',
    buttonGroup: {
        size: 'xsm',
        buttons: [
            {
                name: 'A',
                label: 'A',
            },
            {
                name: 'B',
                label: 'B',
            },
            {
                name: 'C',
                label: 'C',
            },
        ],
    },
};
WithButtons.argTypes = Default.argTypes;
