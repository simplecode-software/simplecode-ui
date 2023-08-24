/// <reference types="react" />
export declare const getCssSides: import("re-reselect").ParametricSelector<string, string | number | null, import("react").CSSProperties | null> & {
    resultFunc: (res1: string, res2: string | number | null) => import("react").CSSProperties | null;
    dependencies: [import("re-reselect").ParametricSelector<string, string | number | null, string>, import("re-reselect").ParametricSelector<string, string | number | null, string | number | null>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: string, props: string | number | null, ...args: any[]) => import("re-reselect").OutputParametricSelector<string, string | number | null, import("react").CSSProperties | null, (res1: string, res2: string | number | null) => import("react").CSSProperties | null, [import("re-reselect").ParametricSelector<string, string | number | null, string>, import("re-reselect").ParametricSelector<string, string | number | null, string | number | null>]>;
    removeMatchingSelector: (state: string, props: string | number | null, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").ParametricKeySelector<string, string | number | null>;
};
