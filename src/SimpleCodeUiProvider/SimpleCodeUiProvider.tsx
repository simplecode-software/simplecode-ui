import React from 'react';

import { TSimpleCodeUiContext } from '../types';
import { SimpleCodeUiContext } from '../SimpleCodeUiContext';
import { defaultSimpleCodeUiContext } from '../SimpleCodeUiContext/SimpleCodeUiContext';


type TProps = Partial<TSimpleCodeUiContext> & Readonly<{
    children?: React.ReactNode;
}>;


const SimpleCodeUiProvider_: React.FunctionComponent<TProps> = ({
    children = null,
    Flex,
    TextFragment,
    ModalSelect,
    Toast,
    InputZone,
    LoadingIcon,
    Modal,
    icons,
    transformText,
}) => {
    const value = React.useMemo<TSimpleCodeUiContext>(
        () => ({
            ...defaultSimpleCodeUiContext,
            Flex,
            TextFragment,
            ModalSelect,
            Toast,
            InputZone,
            LoadingIcon,
            Modal,
            icons,
            transformText,
        } as TSimpleCodeUiContext),
        [
            Flex, TextFragment, ModalSelect, Toast, InputZone,
            LoadingIcon, Modal, icons, transformText,
        ],
    );
    
    return (
        <SimpleCodeUiContext.Provider value={value}>
            {children}
        </SimpleCodeUiContext.Provider>
    );
};

export const SimpleCodeUiProvider = React.memo(SimpleCodeUiProvider_);
