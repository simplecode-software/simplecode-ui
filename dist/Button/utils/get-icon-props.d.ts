import type { TSpecSize, TIconEmbedList, TColorsProp, TActivityState } from '../../types';
export declare const getIconProps: import("re-reselect").Selector<Readonly<{
    icons: TIconEmbedList;
    colors: TColorsProp | null;
    size: TSpecSize;
    state: TActivityState;
}>, TIconEmbedList> & {
    resultFunc: (res1: TIconEmbedList, res2: TColorsProp | null, res3: TSpecSize, res4: TActivityState) => TIconEmbedList;
    dependencies: [import("re-reselect").Selector<Readonly<{
        icons: TIconEmbedList;
        colors: TColorsProp | null;
        size: TSpecSize;
        state: TActivityState;
    }>, TIconEmbedList>, import("re-reselect").Selector<Readonly<{
        icons: TIconEmbedList;
        colors: TColorsProp | null;
        size: TSpecSize;
        state: TActivityState;
    }>, TColorsProp | null>, import("re-reselect").Selector<Readonly<{
        icons: TIconEmbedList;
        colors: TColorsProp | null;
        size: TSpecSize;
        state: TActivityState;
    }>, TSpecSize>, import("re-reselect").Selector<Readonly<{
        icons: TIconEmbedList;
        colors: TColorsProp | null;
        size: TSpecSize;
        state: TActivityState;
    }>, TActivityState>];
    recomputations: () => number;
    resetRecomputations: () => number;
} & {
    getMatchingSelector: (state: Readonly<{
        icons: TIconEmbedList;
        colors: TColorsProp | null;
        size: TSpecSize;
        state: TActivityState;
    }>, ...args: any[]) => import("re-reselect").OutputSelector<Readonly<{
        icons: TIconEmbedList;
        colors: TColorsProp | null;
        size: TSpecSize;
        state: TActivityState;
    }>, TIconEmbedList, (res1: TIconEmbedList, res2: TColorsProp | null, res3: TSpecSize, res4: TActivityState) => TIconEmbedList, [import("re-reselect").Selector<Readonly<{
        icons: TIconEmbedList;
        colors: TColorsProp | null;
        size: TSpecSize;
        state: TActivityState;
    }>, TIconEmbedList>, import("re-reselect").Selector<Readonly<{
        icons: TIconEmbedList;
        colors: TColorsProp | null;
        size: TSpecSize;
        state: TActivityState;
    }>, TColorsProp | null>, import("re-reselect").Selector<Readonly<{
        icons: TIconEmbedList;
        colors: TColorsProp | null;
        size: TSpecSize;
        state: TActivityState;
    }>, TSpecSize>, import("re-reselect").Selector<Readonly<{
        icons: TIconEmbedList;
        colors: TColorsProp | null;
        size: TSpecSize;
        state: TActivityState;
    }>, TActivityState>]>;
    removeMatchingSelector: (state: Readonly<{
        icons: TIconEmbedList;
        colors: TColorsProp | null;
        size: TSpecSize;
        state: TActivityState;
    }>, ...args: any[]) => void;
    clearCache: () => void;
    cache: import("re-reselect").ICacheObject;
    keySelector: import("re-reselect").KeySelector<Readonly<{
        icons: TIconEmbedList;
        colors: TColorsProp | null;
        size: TSpecSize;
        state: TActivityState;
    }>>;
};
