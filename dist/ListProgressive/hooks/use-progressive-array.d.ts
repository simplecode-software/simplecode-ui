import React from 'react';
import { TPropsListProgressive } from '../types';
export declare const useProgressiveArray: <T>({ items, onRenderItem, countInitial, countBatch, interval, }: Readonly<import("../..").PartialNullable<{
    items: readonly (T | null)[];
    onRenderItem: import("../..").TRenderItemFn<T>;
    countInitial: number;
    countBatch: number;
    interval: number;
}>>) => ReadonlyArray<React.ReactElement | null>;
