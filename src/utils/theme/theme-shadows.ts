import React from 'react';
import {
    TThemeShadowsText, TThemeShadows,
} from '../../types';


export const getElevationShadow = (elevation: number, shadowColor: string): React.CSSProperties => ({
    elevation,
    zIndex: elevation,
    shadowColor,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1 * elevation,
    shadowRadius: 0.8 * elevation,
} as React.CSSProperties);

export type TShadowColorsText = Readonly<{
    sm: string,
    md: string,
}>;

export type TShadowColors = TShadowColorsText & Readonly<{
    lg: string,
}>;

export const mapShadows = (colors: TShadowColors, sm: number, md: number, lg: number): TThemeShadows => ({
    none: null,
    sm: getElevationShadow(sm, colors.sm),
    md: getElevationShadow(md, colors.md),
    lg: getElevationShadow(lg, colors.lg),
});

export const mapShadowsText = (colors: TShadowColorsText, sm: number, md: number): TThemeShadowsText => ({
    none: null,
    sm: {
        textShadowColor: colors.sm,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: sm,
        padding: 0,
    } as React.CSSProperties,
    md: {
        textShadowColor: colors.md,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: md,
        padding: 0,
    } as React.CSSProperties,
});
