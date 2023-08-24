import React from 'react';
import { TThemeShadowsText, TThemeShadows } from '../../types';
export declare const getElevationShadow: (elevation: number, shadowColor: string) => React.CSSProperties;
export type TShadowColorsText = Readonly<{
    sm: string;
    md: string;
}>;
export type TShadowColors = TShadowColorsText & Readonly<{
    lg: string;
}>;
export declare const mapShadows: (colors: TShadowColors, sm: number, md: number, lg: number) => TThemeShadows;
export declare const mapShadowsText: (colors: TShadowColorsText, sm: number, md: number) => TThemeShadowsText;
