import { TAnchorDescList, TTransformText } from '../types';
export declare const getAnchors: import("re-reselect").ParametricSelector<string, TTransformText, TAnchorDescList | null> & {
    resultFunc: (res1: string, res2: TTransformText, res3: TAnchorDescList | null) => TAnchorDescList | null;
    dependencies: [import("re-reselect").ParametricSelector<string, TTransformText, string>, import("re-reselect").ParametricSelector<string, TTransformText, TTransformText>, import("re-reselect").ParametricSelector<string, TTransformText, TAnchorDescList | null>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: string, props: TTransformText, ...args: any[]) => import("re-reselect").OutputParametricSelector<string, TTransformText, TAnchorDescList | null, (res1: string, res2: TTransformText, res3: TAnchorDescList | null) => TAnchorDescList | null, [import("re-reselect").ParametricSelector<string, TTransformText, string>, import("re-reselect").ParametricSelector<string, TTransformText, TTransformText>, import("re-reselect").ParametricSelector<string, TTransformText, TAnchorDescList | null>]>;
    removeMatchingSelector: (state: string, props: TTransformText, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").ParametricKeySelector<string, TTransformText>;
};
