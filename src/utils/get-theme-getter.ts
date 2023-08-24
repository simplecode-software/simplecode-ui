import React from 'react';
import createCachedSelector from 're-reselect';

import {
    TBorderGetter, TColorGetter, TColorSet, TFontGetter, TShadowGetter,
    TShadowTextGetter, TShapeGetter, TSizeGetter, TTheme, TThemeField,
    TThemeVariantGetter, TColorSetKey, TPresetColors, TColorSetGetter,
} from '../types';
import { emptyString } from '../constants/empty';


type TNested = Readonly<{ [id: string]: TNested | unknown }>;

const getNested = (path: string, source: TNested): unknown => {
    const pathSegments: ReadonlyArray<string> = path.split('.');
    const count: number = pathSegments.length;
    
    if (!count) {
        return undefined;
    }
    
    if (count === 1) {
        return source[path];
    }
    
    if (count === 2) {
        const segment0: string = pathSegments[0] ?? emptyString;
        const nest1: TNested | unknown = source[segment0];
        if (!nest1 || typeof nest1 !== 'object') {
            return undefined;
        }
        
        const segment1: string = pathSegments[1] ?? emptyString;
        return (nest1 as TNested)[segment1];
    }
    
    let value: TNested | unknown = source;
    
    for (let i = 0; i < pathSegments.length; i++) {
        const segment: string = pathSegments[i] || '';
        if (!value || typeof value !== 'object') {
            return undefined;
        }
        value = (value as TNested)[segment];
    }
    
    return value;
};

const getThemeVariantGetter = createCachedSelector<
    TTheme, TThemeField, TNested | null, TThemeVariantGetter
>(
    (theme, field) => (theme ? (theme[field] || null) : null),
    (nest) => {
        return (name: string | null) => {
            if (!name || !nest) {
                return null;
            }
            return getNested(name, nest) || null;
        };
    },
)(() => 'get-theme-getter/getThemeVariantGetter');

export const getThemeShapeGetter = createCachedSelector<
    TTheme, TThemeVariantGetter, TShapeGetter
>(
    (theme) => getThemeVariantGetter(theme, 'shapes'),
    (getShape) => {
        return (name) => {
            if (name === 'none' || !name) {
                return null;
            }
            return getShape(name.includes('.') ? name : `${name}.all`) as (React.CSSProperties | null);
        };
    },
)(() => 'get-theme-getter/getThemeShapeGetter');

export const getThemeBorderGetter = createCachedSelector<
    TTheme, TThemeVariantGetter, TBorderGetter
>(
    (theme) => getThemeVariantGetter(theme, 'borders'),
    (getBorder) => {
        return (name) => {
            if (name === 'none' || !name) {
                return null;
            }
            return getBorder(name.includes('.') ? name : `${name}.all`) as (React.CSSProperties | null);
        };
    },
)(() => 'get-theme-getter/getThemeBorderGetter');

export const getThemeSizeGetter = createCachedSelector<
    TTheme, TThemeVariantGetter, TSizeGetter
>(
    (theme) => getThemeVariantGetter(theme, 'sizes'),
    (getSize) => {
        return (name, prefix) => {
            if (name === 'auto' || !name || typeof name !== 'string') {
                return null;
            }
            return getSize(name.includes('.') ? name : `${prefix}.${name}`) as (number | null);
        };
    },
)(() => 'get-theme-getter/getThemeSizeGetter');

export const getThemeFontGetter = createCachedSelector<
    TTheme, TThemeVariantGetter, TFontGetter
>(
    (theme) => getThemeVariantGetter(theme, 'fonts'),
    (getFont) => {
        return (name) => getFont(name) as (React.CSSProperties | null);
    },
)(() => 'get-theme-getter/getThemeFontGetter');

export const getThemeShadowGetter = createCachedSelector<
    TTheme, TThemeVariantGetter, TShadowGetter
>(
    (theme) => getThemeVariantGetter(theme, 'shadows'),
    (getShadow) => {
        return (name) => getShadow(name) as (React.CSSProperties | null);
    },
)(() => 'get-theme-getter/getThemeShadowGetter');

export const getThemeShadowTextGetter = createCachedSelector<
    TTheme, TThemeVariantGetter, TShadowTextGetter
>(
    (theme) => getThemeVariantGetter(theme, 'shadowsText'),
    (getShadowText) => {
        return (name) => getShadowText(name) as (React.CSSProperties | null);
    },
)(() => 'get-theme-getter/getThemeShadowTextGetter');

export const getThemeColorGetter = createCachedSelector<
    TTheme, TThemeVariantGetter, TColorGetter
>(
    (theme) => getThemeVariantGetter(theme, 'colors'),
    (getColor) => {
        return (name) => getColor(name) as (string | null);
    },
)(() => 'get-theme-getter/getThemeColorGetter');

type TColorKind = 'text' | 'bg' | 'border';

export const getThemeColorSetGetter = createCachedSelector<
    TTheme, TColorKind, TColorGetter, TPresetColors, TColorKind, TColorSetGetter
>(
    (theme) => getThemeColorGetter(theme),
    ({ colorSets }) => colorSets,
    (_theme, kind) => kind,
    (getColor, colorSets, kind) => {
        const getter: TColorSetGetter = (state, colors): string => {
            const finalColorset: TColorSet = (
                typeof colors === 'string'
                    ? colorSets[colors] || colorSets.primary
                    : colors || colorSets.primary
            );
            
            const key = (
                (state === 'active' && `${kind}Active`) ||
                (state === 'hover' && `${kind}Hover`) ||
                kind
            );
            const color: string = finalColorset[key as TColorSetKey];
            
            return (getColor(color) as (string | null)) || color;
        };
        return getter;
    },
)(() => 'get-theme-getter/getThemeColorSetGetter');
