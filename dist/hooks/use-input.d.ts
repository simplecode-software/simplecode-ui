import { TCbString, TCbVoid, TOnPress } from '../types';
type TIn = Readonly<{
    onChangeText: TCbString | null;
    onBlur?: TCbVoid | null;
    onFocus?: TCbVoid | null;
}>;
type TOut = Readonly<{
    isPassVisible: boolean;
    isFocused: boolean;
    togglePassVisible: TOnPress;
    clear: TOnPress;
    focus: TCbVoid;
    unfocus: TCbVoid;
}>;
export declare const useInput: (params: TIn) => TOut;
export {};
