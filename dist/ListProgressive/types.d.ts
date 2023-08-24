import { TPartial, TRenderItemFn } from '../types';
export type TPropsListProgressive<T> = TPartial<{
    items: ReadonlyArray<T | null>;
    onRenderItem: TRenderItemFn<T>;
    countInitial: number;
    countBatch: number;
    interval: number;
}>;
