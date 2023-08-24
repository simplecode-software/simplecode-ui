import React from 'react';

import {
    TThemeContext, TTheme,
} from '../types';
import {
    getThemeBorderGetter, getThemeColorGetter, getThemeFontGetter, getThemeShadowGetter,
    getThemeShadowTextGetter, getThemeShapeGetter, getThemeSizeGetter, getThemeColorSetGetter,
} from '../utils/get-theme-getter';
import { ThemeContext } from '../ThemeContext';
import { defaultTheme } from '../constants/default-theme';


type TProps = Readonly<{
    theme?: TTheme | null;
    children: React.ReactNode;
}>;


const ThemeProvider_: React.FunctionComponent<TProps> = ({
    children = null,
    theme = null,
}: TProps) => {
    const themeFinal = theme || defaultTheme;
    const value = React.useMemo<TThemeContext>(
        () => ({
            theme: themeFinal,
            getShape: getThemeShapeGetter(themeFinal),
            getBorder: getThemeBorderGetter(themeFinal),
            getSize: getThemeSizeGetter(themeFinal),
            getFont: getThemeFontGetter(themeFinal),
            getShadow: getThemeShadowGetter(themeFinal),
            getShadowText: getThemeShadowTextGetter(themeFinal),
            getColor: getThemeColorGetter(themeFinal),
            getColorBg: getThemeColorSetGetter(themeFinal, 'bg'),
            getColorText: getThemeColorSetGetter(themeFinal, 'text'),
            getColorBorder: getThemeColorSetGetter(themeFinal, 'border'),
        }),
        [themeFinal],
    );
    
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const ThemeProvider = React.memo(ThemeProvider_);
