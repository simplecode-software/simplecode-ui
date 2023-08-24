import React from 'react';
import {
    ThemeProvider, TTheme,
} from '../../src';
import { UiProviderWeb } from '../UiProviderWeb';
import { ModalProvider } from '../ModalProvider';
import { themeNull } from '../constants/theme-null';


type TProps = Readonly<{
    children: React.ReactNode;
    theme?: TTheme | null;
}>;


export const TestRenderer: React.FunctionComponent<TProps> = ({
    children = null,
    theme = null,
}: TProps) => {
    return (
        <React.StrictMode>
            <UiProviderWeb>
                <ThemeProvider theme={theme ?? themeNull}>
                    <ModalProvider>
                        {children}
                    </ModalProvider>
                </ThemeProvider>
            </UiProviderWeb>
        </React.StrictMode>
    );
};
