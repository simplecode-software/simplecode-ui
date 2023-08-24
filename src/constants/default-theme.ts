import React from 'react';
import {
    TTheme,
    TThemeShadowsText,
    TThemeShapes,
    TThemeShadows,
    TDirectionalStyle,
    TThemeBorders,
    TThemeSizes,
    TPresetColors,
    TColorSet,
} from '../types';


const specColors = {
    black: '#000000',
    white: '#FFFFFF',
};

const sizes: TThemeSizes = {
    font: {
        xxsm: 12,
        xsm: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xlg: 20,
        xxlg: 20,
        auto: 16,
    },
    line: {
        xxsm: 20,
        xsm: 20,
        sm: 22,
        md: 24,
        lg: 26,
        xlg: 28,
        xxlg: 28,
        auto: null,
    },
    button: {
        xxsm: 30,
        xsm: 36,
        sm: 42,
        md: 48,
        lg: 54,
        xlg: 60,
        xxlg: 66,
        auto: null,
    },
    icon: {
        xxsm: 28,
        xsm: 32,
        sm: 36,
        md: 40,
        lg: 44,
        xlg: 48,
        xxlg: 52,
        auto: null,
    },
    item: {
        xxsm: 36,
        xsm: 42,
        sm: 48,
        md: 54,
        lg: 60,
        xlg: 66,
        xxlg: 72,
        auto: null,
    },
    divider: {
        xxsm: 0.2,
        xsm: 0.4,
        sm: 0.8,
        md: 1,
        lg: 2,
        xlg: 3,
        xxlg: 4,
        auto: null,
    },
};

const fonts: Record<string, React.CSSProperties | null> = {
    regular: null,
    semi: null,
    bold: null,
    mono: null,
};

const shadows: TThemeShadows = {
    none: null,
    sm: null,
    md: null,
    lg: null,
};

const shadowsText: TThemeShadowsText = {
    none: null,
    sm: null,
    md: null,
};


const getTopShape = (radius: number): React.CSSProperties => ({
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
});
const getBottomShape = (radius: number): React.CSSProperties => ({
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: radius,
    borderBottomLeftRadius: radius,
});
const getLeftShape = (radius: number): React.CSSProperties => ({
    borderTopLeftRadius: radius,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: radius,
});
const getRightShape = (radius: number): React.CSSProperties => ({
    borderTopLeftRadius: 0,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
    borderBottomLeftRadius: 0,
});

const getShapesForRadius = (radius: number): TDirectionalStyle => ({
    all: { borderRadius: radius },
    top: getTopShape(radius),
    bottom: getBottomShape(radius),
    left: getLeftShape(radius),
    right: getRightShape(radius),
});

const shapes: TThemeShapes = {
    rounded: getShapesForRadius(100),
    xlg: getShapesForRadius(12),
    lg: getShapesForRadius(8),
    md: getShapesForRadius(6),
    sm: getShapesForRadius(4),
};

const getTopBorder = (width: number): React.CSSProperties => ({
    borderTopWidth: width,
    borderRightWidth: 0,
    borderBottomWidth: width,
    borderLeftWidth: 0,
    borderBottomColor: 'transparent',
});
const getBottomBorder = (width: number): React.CSSProperties => ({
    borderTopWidth: width,
    borderRightWidth: 0,
    borderBottomWidth: width,
    borderLeftWidth: 0,
    borderTopColor: 'transparent',
});
const getLeftBorder = (width: number): React.CSSProperties => ({
    borderTopWidth: 0,
    borderRightWidth: width,
    borderBottomWidth: 0,
    borderLeftWidth: width,
    borderRightColor: 'transparent',
});
const getRightBorder = (width: number): React.CSSProperties => ({
    borderTopWidth: 0,
    borderRightWidth: width,
    borderBottomWidth: 0,
    borderLeftWidth: width,
    borderLeftColor: 'transparent',
});

const getBordersForWidth = (width: number): TDirectionalStyle => ({
    all: { borderWidth: width },
    top: getTopBorder(width),
    bottom: getBottomBorder(width),
    left: getLeftBorder(width),
    right: getRightBorder(width),
});

const borders: TThemeBorders = {
    xlg: getBordersForWidth(4),
    lg: getBordersForWidth(3),
    md: getBordersForWidth(2),
    sm: getBordersForWidth(1),
};

const defaultColorSet: TColorSet = {
    text: 'text.primary',
    textHover: 'text.primary',
    textActive: 'text.primary',
    bg: 'bg.primary',
    bgHover: 'bg.primary',
    bgActive: 'bg.primary',
    border: 'transparent',
    borderHover: 'transparent',
    borderActive: 'transparent',
};

const defaultColorSetGhost: TColorSet = {
    text: 'text.primary',
    textHover: 'text.primary',
    textActive: 'text.primary',
    bg: 'bg.primary',
    bgHover: 'bg.primary',
    bgActive: 'bg.primary',
    border: 'text.primary',
    borderHover: 'text.primary',
    borderActive: 'text.primary',
};

const defaultColorSetText: TColorSet = {
    text: 'text.primary',
    textHover: 'text.primary',
    textActive: 'text.primary',
    bg: 'transparent',
    bgHover: 'transparent',
    bgActive: 'transparent',
    border: 'transparent',
    borderHover: 'transparent',
    borderActive: 'transparent',
};

const colorSets: TPresetColors = {
    none: {
        text: 'transparent',
        textHover: 'transparent',
        textActive: 'transparent',
        bg: 'transparent',
        bgHover: 'transparent',
        bgActive: 'transparent',
        border: 'transparent',
        borderHover: 'transparent',
        borderActive: 'transparent',
    },
    primary: defaultColorSet,
    primaryghost: defaultColorSetGhost,
    primarytext: defaultColorSetText,
    secondary: defaultColorSet,
    secondaryghost: defaultColorSetGhost,
    secondarytext: defaultColorSetText,
    tertiary: defaultColorSet,
    tertiaryghost: defaultColorSetGhost,
    tertiarytext: defaultColorSetText,
    accent: defaultColorSet,
    accentghost: defaultColorSetGhost,
    accenttext: defaultColorSetText,
    success: defaultColorSet,
    successghost: defaultColorSetGhost,
    successtext: defaultColorSetText,
    warning: defaultColorSet,
    warningghost: defaultColorSetGhost,
    warningtext: defaultColorSetText,
    error: defaultColorSet,
    errorghost: defaultColorSetGhost,
    errortext: defaultColorSetText,
    light: defaultColorSet,
    lightghost: defaultColorSetGhost,
    lighttext: defaultColorSetText,
    grey: defaultColorSet,
    greyghost: defaultColorSetGhost,
    greytext: defaultColorSetText,
    dark: defaultColorSet,
    darkghost: defaultColorSetGhost,
    darktext: defaultColorSetText,
};

export const defaultTheme: TTheme = {
    colors: {
        spec: specColors,
        text: {
            primary: specColors.black,
            primaryplus: specColors.black,
            primaryminus: specColors.black,
            primaryalt: specColors.black,
            primaryaltplus: specColors.black,
            primaryaltminus: specColors.black,
            secondary: specColors.black,
            secondaryplus: specColors.black,
            secondaryminus: specColors.black,
            tertiary: specColors.black,
            tertiaryplus: specColors.black,
            tertiaryminus: specColors.black,
            accent: specColors.black,
            accentplus: specColors.black,
            accentminus: specColors.black,
            success: specColors.black,
            successplus: specColors.black,
            successminus: specColors.black,
            warning: specColors.black,
            warningplus: specColors.black,
            warningminus: specColors.black,
            error: specColors.black,
            errorplus: specColors.black,
            errorminus: specColors.black,
            contrast: specColors.black,
        },
        bg: {
            primary: specColors.white,
            primaryplus: specColors.white,
            primaryminus: specColors.white,
            primaryalt: specColors.white,
            primaryaltplus: specColors.white,
            primaryaltminus: specColors.white,
            secondary: specColors.white,
            secondaryplus: specColors.white,
            secondaryminus: specColors.white,
            tertiary: specColors.white,
            tertiaryplus: specColors.white,
            tertiaryminus: specColors.white,
            accent: specColors.white,
            accentplus: specColors.white,
            accentminus: specColors.white,
            success: specColors.white,
            successplus: specColors.white,
            successminus: specColors.white,
            warning: specColors.white,
            warningplus: specColors.white,
            warningminus: specColors.white,
            error: specColors.white,
            errorplus: specColors.white,
            errorminus: specColors.white,
            contrast: specColors.white,
        },
    },
    fonts,
    sizes,
    shadows,
    shadowsText,
    shapes,
    borders,
    colorSets,
};
