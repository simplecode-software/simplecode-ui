import React, { forwardRef } from 'react';

import {
    TEmptyObject, TIconEmbed, TSimpleCodeUiContext, TSimpleCodeUiIcons,
} from '../types';
import { getLogger } from '../utils/log-interface';


type TFakeComponent = React.ForwardRefExoticComponent<TEmptyObject>;

const getFakeComponent: (name: string) => TFakeComponent = (name) => {
    return forwardRef(() => {
        React.useEffect(
            () => {
                getLogger().warn(`SimpleCodeUiProvider is missing "${name}".`);
            },
            [],
        );
        
        return null;
    });
};


const getFakeIcon: (name: string) => TIconEmbed = (name) => ({
    Component: getFakeComponent(`icons.${name}`),
});

const emptyIcons: TSimpleCodeUiIcons = {
    caretDown: getFakeIcon('caretDown'),
    radioOn: getFakeIcon('radioOn'),
    radioOff: getFakeIcon('radioOff'),
    checkboxOn: getFakeIcon('checkboxOn'),
    checkboxOff: getFakeIcon('checkboxOff'),
    switchHandle: getFakeIcon('switchHandle'),
};

export const defaultSimpleCodeUiContext: TSimpleCodeUiContext = {
    Flex: getFakeComponent('Flex'),
    TextFragment: getFakeComponent('TextFragment'),
    ModalSelect: getFakeComponent('ModalSelect'),
    Toast: getFakeComponent('Toast'),
    InputZone: getFakeComponent('InputZone'),
    LoadingIcon: getFakeComponent('LoadingIcon'),
    Modal: getFakeComponent('Modal'),
    icons: emptyIcons,
    transformText: (text) => text,
};

export const SimpleCodeUiContext = React.createContext<TSimpleCodeUiContext>({
    ...defaultSimpleCodeUiContext,
});
