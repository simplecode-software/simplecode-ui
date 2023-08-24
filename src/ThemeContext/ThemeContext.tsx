import React from 'react';

import { defaultTheme } from '../constants/default-theme';
import { TThemeContext } from '../types';
import {
    getThemeBorderGetter, getThemeColorGetter, getThemeFontGetter, getThemeShadowGetter,
    getThemeShadowTextGetter, getThemeShapeGetter, getThemeSizeGetter, getThemeColorSetGetter,
} from '../utils/get-theme-getter';


const defaultContext: TThemeContext = {
    theme: defaultTheme,
    getShape: getThemeShapeGetter(defaultTheme),
    getBorder: getThemeBorderGetter(defaultTheme),
    getSize: getThemeSizeGetter(defaultTheme),
    getFont: getThemeFontGetter(defaultTheme),
    getShadow: getThemeShadowGetter(defaultTheme),
    getShadowText: getThemeShadowTextGetter(defaultTheme),
    getColor: getThemeColorGetter(defaultTheme),
    getColorBg: getThemeColorSetGetter(defaultTheme, 'bg'),
    getColorText: getThemeColorSetGetter(defaultTheme, 'text'),
    getColorBorder: getThemeColorSetGetter(defaultTheme, 'border'),
};

export const ThemeContext = React.createContext<TThemeContext>(defaultContext);
