import React from 'react';
export declare const ThemeProvider: React.NamedExoticComponent<Readonly<{
    theme?: Readonly<{
        colors: Readonly<{
            spec: Readonly<Record<string, string>>;
            text: Readonly<Record<import("../types").TThemeColorSlot, string>>;
            bg: Readonly<Record<import("../types").TThemeColorSlot, string>>;
        }>;
        shapes: Readonly<Record<import("../types").TShapeMain, Readonly<{
            all: import("../types").TStyle;
            top: import("../types").TStyle;
            bottom: import("../types").TStyle;
            left: import("../types").TStyle;
            right: import("../types").TStyle;
        }>>>;
        fonts: Readonly<Record<string, React.CSSProperties | null>>;
        borders: Readonly<Record<import("../types").TBorderMain, Readonly<{
            all: import("../types").TStyle;
            top: import("../types").TStyle;
            bottom: import("../types").TStyle;
            left: import("../types").TStyle;
            right: import("../types").TStyle;
        }>>>;
        sizes: Readonly<Record<import("../types").TThemeSizeName, Readonly<Record<import("../types").TSpecSize, number | null>>>>;
        shadows: Readonly<Record<import("../types").TShadowName, React.CSSProperties | null>>;
        shadowsText: Readonly<Record<import("../types").TShadowTextName, React.CSSProperties | null>>;
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<import("../types").TColorSetKey, string>>>>;
    }> | null | undefined;
    children: React.ReactNode;
}>>;
