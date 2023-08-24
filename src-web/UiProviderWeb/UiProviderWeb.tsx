import React from 'react';
import {
    SimpleCodeUiProvider, TTransformText,
} from '../../src';

import { icons } from './constants';
import { FlexWeb } from './FlexWeb';
import { InputZoneWeb } from './InputZoneWeb';
import { LoadingIconWeb } from './LoadingIconWeb';
import { ModalWeb } from './ModalWeb';
import { ModalSelectWeb } from './ModalSelectWeb';
import { TextFragment } from './TextFragmentWeb';
import { ToastWeb } from './ToastWeb';


type TProps = Readonly<{
    children: React.ReactNode;
}>;

const transformText: TTransformText = (text) => text;


const UiProviderWeb_: React.FunctionComponent<TProps> = ({
    children,
}) => {
    return (
        <SimpleCodeUiProvider
            Flex={FlexWeb}
            TextFragment={TextFragment}
            ModalSelect={ModalSelectWeb}
            Toast={ToastWeb}
            InputZone={InputZoneWeb}
            LoadingIcon={LoadingIconWeb}
            Modal={ModalWeb}
            icons={icons}
            transformText={transformText}
        >
            {children}
        </SimpleCodeUiProvider>
    );
};

export const UiProviderWeb = React.memo(UiProviderWeb_);
