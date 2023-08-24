import { TMentionDescList } from '../types';
export declare const getMentions: import("re-reselect").Selector<string, TMentionDescList | null> & {
    resultFunc: (res1: string, res2: TMentionDescList | null) => TMentionDescList | null;
    dependencies: [import("re-reselect").Selector<string, string>, import("re-reselect").Selector<string, TMentionDescList | null>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: string, ...args: any[]) => import("re-reselect").OutputSelector<string, TMentionDescList | null, (res1: string, res2: TMentionDescList | null) => TMentionDescList | null, [import("re-reselect").Selector<string, string>, import("re-reselect").Selector<string, TMentionDescList | null>]>;
    removeMatchingSelector: (state: string, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").KeySelector<string>;
};
