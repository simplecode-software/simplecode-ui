import React from 'react';

import {
    TTheme, TThemeShadowsText, TThemeShapes, TThemeShadows,
    TThemeBorders, TThemeSizes, TPresetColors, TSpecSizes, TColorSet, TColorSlots, TDict,
    mapBorders, mapShadows, mapShadowsText, mapShapes, hashIntoColor,
} from '../../src';
import { defaultTheme } from '../../src/constants/default-theme';


const specColors: TDict<string> = Object.keys(defaultTheme.colors.spec).reduce(
    (accum, next) => ({ ...accum, [next]: hashIntoColor(next) }),
    {},
);

const oneSizeFitsAll: TSpecSizes = {
    xxsm: 15,
    xsm: 20,
    sm: 25,
    md: 30,
    lg: 35,
    xlg: 40,
    xxlg: 45,
    auto: 50,
};

const sizes: TThemeSizes = Object.keys(defaultTheme.sizes).reduce(
    (accum, next) => ({ ...accum, [next]: oneSizeFitsAll }),
    {} as TThemeSizes,
);


const fonts: TDict<React.CSSProperties> = Object.keys(defaultTheme.fonts).reduce(
    (accum, next) => ({ ...accum, [next]: { fontFamily: next } }),
    {},
);

const shadows: TThemeShadows = mapShadows({ sm: 'red', md: 'green', lg: 'defaultTheme' }, 2, 4, 6);

const shadowsText: TThemeShadowsText = mapShadowsText({ sm: 'cyan', md: 'magenta' }, 2, 4);

const shapes: TThemeShapes = mapShapes(4, 6, 8, 12);

const borders: TThemeBorders = mapBorders(1, 2, 3, 4);


const createFakeColorSet = (name: string): TColorSet => ({
    text: hashIntoColor(`text-${name}`),
    textHover: hashIntoColor(`textHover-${name}`),
    textActive: hashIntoColor(`textActive-${name}`),
    bg: hashIntoColor(`bg-${name}`),
    bgHover: hashIntoColor(`bgHover-${name}`),
    bgActive: hashIntoColor(`bgActive-${name}`),
    border: hashIntoColor(`border-${name}`),
    borderHover: hashIntoColor(`borderHover-${name}`),
    borderActive: hashIntoColor(`borderActive-${name}`),
});

const colorSets: TPresetColors = Object.keys(defaultTheme.colorSets).reduce(
    (accum, next) => ({ ...accum, [next]: createFakeColorSet(next) }),
    {} as TPresetColors,
);

export const themeNull: TTheme = {
    colors: {
        spec: specColors,
        text: Object.keys(defaultTheme.colors.text).reduce(
            (accum, next) => ({ ...accum, [next]: hashIntoColor(`text-${next}`) }),
            {} as TColorSlots,
        ),
        bg: Object.keys(defaultTheme.colors.text).reduce(
            (accum, next) => ({ ...accum, [next]: hashIntoColor(`bg-${next}`) }),
            {} as TColorSlots,
        ),
    },
    fonts,
    sizes,
    shadows,
    shadowsText,
    shapes,
    borders,
    colorSets,
};
