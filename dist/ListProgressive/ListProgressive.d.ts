import React from 'react';
import { TPropsListProgressive } from './types';
export declare const ListProgressive: <T>(props: Readonly<import("..").PartialNullable<{
    items: readonly (T | null)[];
    onRenderItem: import("..").TRenderItemFn<T>;
    countInitial: number;
    countBatch: number;
    interval: number;
}>>) => React.ReactElement;
