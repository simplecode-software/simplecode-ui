import React from 'react';
export declare const getMargins: import("re-reselect").Selector<string | number | null, React.CSSProperties | null> & {
    resultFunc: (res: string | number | null) => React.CSSProperties | null;
    dependencies: [import("re-reselect").Selector<string | number | null, string | number | null>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: string | number | null, ...args: any[]) => import("re-reselect").OutputSelector<string | number | null, React.CSSProperties | null, (res: string | number | null) => React.CSSProperties | null, [import("re-reselect").Selector<string | number | null, string | number | null>]>;
    removeMatchingSelector: (state: string | number | null, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").KeySelector<string | number | null>;
};
