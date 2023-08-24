import { TCbBool, TCbVoid } from '../types';
type TIn = Readonly<{
    onChange?: TCbBool | null;
    value?: boolean | null;
    isDisabled?: boolean | null;
}>;
type TOut = Readonly<{
    switchValue: boolean;
    toggle: TCbVoid;
}>;
export declare const useSwitch: (params: TIn) => TOut;
export {};
