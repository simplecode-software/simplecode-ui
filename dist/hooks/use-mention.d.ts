import { TCbString, TCbVoid, TSetState } from '../types';
type TMentionOpts = Readonly<{
    setText: TSetState<string>;
}>;
type TMentionOut = Readonly<{
    mention: string;
    setMention: TSetState<string>;
    clearMention: TCbVoid;
    applyMention: TCbString;
}>;
export declare const useMention: ({ setText, }: TMentionOpts) => TMentionOut;
export {};
