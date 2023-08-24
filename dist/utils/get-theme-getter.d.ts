import React from 'react';
import { TBorderGetter, TColorGetter, TFontGetter, TShadowGetter, TShadowTextGetter, TShapeGetter, TSizeGetter, TThemeVariantGetter, TColorSetKey, TColorSetGetter } from '../types';
export declare const getThemeShapeGetter: import("re-reselect").Selector<Readonly<{
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
    colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
}>, TShapeGetter> & {
    resultFunc: (res: TThemeVariantGetter) => TShapeGetter;
    dependencies: [import("re-reselect").Selector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TThemeVariantGetter>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, ...args: any[]) => import("re-reselect").OutputSelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TShapeGetter, (res: TThemeVariantGetter) => TShapeGetter, [import("re-reselect").Selector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TThemeVariantGetter>]>;
    removeMatchingSelector: (state: Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").KeySelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>>;
};
export declare const getThemeBorderGetter: import("re-reselect").Selector<Readonly<{
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
    colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
}>, TBorderGetter> & {
    resultFunc: (res: TThemeVariantGetter) => TBorderGetter;
    dependencies: [import("re-reselect").Selector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TThemeVariantGetter>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, ...args: any[]) => import("re-reselect").OutputSelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TBorderGetter, (res: TThemeVariantGetter) => TBorderGetter, [import("re-reselect").Selector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TThemeVariantGetter>]>;
    removeMatchingSelector: (state: Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").KeySelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>>;
};
export declare const getThemeSizeGetter: import("re-reselect").Selector<Readonly<{
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
    colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
}>, TSizeGetter> & {
    resultFunc: (res: TThemeVariantGetter) => TSizeGetter;
    dependencies: [import("re-reselect").Selector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TThemeVariantGetter>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, ...args: any[]) => import("re-reselect").OutputSelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TSizeGetter, (res: TThemeVariantGetter) => TSizeGetter, [import("re-reselect").Selector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TThemeVariantGetter>]>;
    removeMatchingSelector: (state: Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").KeySelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>>;
};
export declare const getThemeFontGetter: import("re-reselect").Selector<Readonly<{
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
    colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
}>, TFontGetter> & {
    resultFunc: (res: TThemeVariantGetter) => TFontGetter;
    dependencies: [import("re-reselect").Selector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TThemeVariantGetter>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, ...args: any[]) => import("re-reselect").OutputSelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TFontGetter, (res: TThemeVariantGetter) => TFontGetter, [import("re-reselect").Selector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TThemeVariantGetter>]>;
    removeMatchingSelector: (state: Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").KeySelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>>;
};
export declare const getThemeShadowGetter: import("re-reselect").Selector<Readonly<{
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
    colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
}>, TShadowGetter> & {
    resultFunc: (res: TThemeVariantGetter) => TShadowGetter;
    dependencies: [import("re-reselect").Selector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TThemeVariantGetter>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, ...args: any[]) => import("re-reselect").OutputSelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TShadowGetter, (res: TThemeVariantGetter) => TShadowGetter, [import("re-reselect").Selector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TThemeVariantGetter>]>;
    removeMatchingSelector: (state: Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").KeySelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>>;
};
export declare const getThemeShadowTextGetter: import("re-reselect").Selector<Readonly<{
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
    colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
}>, TShadowTextGetter> & {
    resultFunc: (res: TThemeVariantGetter) => TShadowTextGetter;
    dependencies: [import("re-reselect").Selector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TThemeVariantGetter>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, ...args: any[]) => import("re-reselect").OutputSelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TShadowTextGetter, (res: TThemeVariantGetter) => TShadowTextGetter, [import("re-reselect").Selector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TThemeVariantGetter>]>;
    removeMatchingSelector: (state: Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").KeySelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>>;
};
export declare const getThemeColorGetter: import("re-reselect").Selector<Readonly<{
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
    colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
}>, TColorGetter> & {
    resultFunc: (res: TThemeVariantGetter) => TColorGetter;
    dependencies: [import("re-reselect").Selector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TThemeVariantGetter>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, ...args: any[]) => import("re-reselect").OutputSelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TColorGetter, (res: TThemeVariantGetter) => TColorGetter, [import("re-reselect").Selector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TThemeVariantGetter>]>;
    removeMatchingSelector: (state: Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").KeySelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>>;
};
type TColorKind = 'text' | 'bg' | 'border';
export declare const getThemeColorSetGetter: import("re-reselect").ParametricSelector<Readonly<{
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
    colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
}>, TColorKind, TColorSetGetter> & {
    resultFunc: (res1: TColorGetter, res2: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>, res3: TColorKind) => TColorSetGetter;
    dependencies: [import("re-reselect").ParametricSelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TColorKind, TColorGetter>, import("re-reselect").ParametricSelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TColorKind, Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>>, import("re-reselect").ParametricSelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TColorKind, TColorKind>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, props: TColorKind, ...args: any[]) => import("re-reselect").OutputParametricSelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TColorKind, TColorSetGetter, (res1: TColorGetter, res2: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>, res3: TColorKind) => TColorSetGetter, [import("re-reselect").ParametricSelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TColorKind, TColorGetter>, import("re-reselect").ParametricSelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TColorKind, Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>>, import("re-reselect").ParametricSelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TColorKind, TColorKind>]>;
    removeMatchingSelector: (state: Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, props: TColorKind, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").ParametricKeySelector<Readonly<{
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
        colorSets: Readonly<Record<import("../types").TPresetColorsName, Readonly<Record<TColorSetKey, string>>>>;
    }>, TColorKind>;
};
export {};
