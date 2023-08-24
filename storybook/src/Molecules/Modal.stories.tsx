import React from 'react';
import {
    Modal, Flex, ListItem, emptyFunction,
} from '../../../src';

import {
    StoryTypeColors, themeArgs, themeArgTypes,
} from '../constants';
import Mobile from '../Mobile';
import { TPropsStoryModal, TStoryComponent } from '../types';


export default {
    title: 'Design System/Molecules/Modal',
    component: Modal,
};


export const Default: TStoryComponent<TPropsStoryModal> = ({
    isHidden = null,
    isTransparent = null,
    overlayStyle = null,
    backgroundStyle = null,
    ...aux
}) => {
    return (
        <Mobile theme={aux['[theme]']} colors={aux['[background]']}>
            <Flex padding={15} flex={1}>
                <ListItem label="[Example app content]" />
                <Modal
                    isHidden={isHidden}
                    onDismiss={emptyFunction}
                    isTransparent={isTransparent}
                    backgroundStyle={backgroundStyle}
                    overlayStyle={overlayStyle}
                >
                    <ListItem
                        label="[Example modal content]"
                        colors="secondary"
                        padding="0 15"
                    />
                </Modal>
            </Flex>
        </Mobile>
    );
};

Default.args = {
    ...themeArgs,
    '[background]': 'primary',
    isHidden: false,
    isTransparent: false,
    backgroundStyle: {},
    overlayStyle: {},
    children: null,
    onDismiss: () => undefined,
    testId: '',
};

Default.argTypes = {
    ...themeArgTypes,
    '[background]': StoryTypeColors,
    isHidden: {
        control: {
            type: 'boolean',
        },
    },
    isTransparent: {
        control: {
            type: 'boolean',
        },
    },
    backgroundStyle: {
        control: {
            type: 'object',
        },
    },
    overlayStyle: {
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

export const Transparent: TStoryComponent<TPropsStoryModal> = (props) => Default(props);
Transparent.args = {
    ...Default.args,
    isTransparent: true,
    overlayStyle: {
        backgroundColor: '#3d5380ee',
    },
    backgroundStyle: {
        justifyContent: 'center',
    },
};
Transparent.argTypes = Default.argTypes;
