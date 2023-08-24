import { TStringList } from '../types';
export declare const getCssArgs: import("re-reselect").Selector<string, TStringList | null> & {
    resultFunc: (res: string) => TStringList | null;
    dependencies: [import("re-reselect").Selector<string, string>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: string, ...args: any[]) => import("re-reselect").OutputSelector<string, TStringList | null, (res: string) => TStringList | null, [import("re-reselect").Selector<string, string>]>;
    removeMatchingSelector: (state: string, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").KeySelector<string>;
};
