import type { TStyle, TSpecSize } from '../../types';
type TStyleOpts = Readonly<{
    size: TSpecSize;
    style: TStyle | null;
}>;
export declare const useButtonStyle: (opts: TStyleOpts) => TStyle;
export {};
