import React from 'react';
import {
    ThemeProvider,
} from '../../src';
import {
    UiProviderWeb, ModalProvider,
} from '../../src-web';

import { TPropsThemed } from './types';
import { getTheme } from './utils/get-theme';


const Themed: React.FunctionComponent<TPropsThemed> = ({
    children = null,
    theme,
}: TPropsThemed) => {
    return (
        <React.StrictMode>
            <UiProviderWeb>
                <ThemeProvider theme={getTheme(theme)}>
                    <ModalProvider>
                        {children}
                    </ModalProvider>
                </ThemeProvider>
            </UiProviderWeb>
        </React.StrictMode>
    );
};


export default React.memo(Themed);
