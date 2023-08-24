import { TActiveButtons, TButtonGroupBehavior, TButtonGroupOnPress } from '../types';
type TOpts = Readonly<{
    active?: TActiveButtons | null;
    behavior?: TButtonGroupBehavior | null;
    onPress?: TButtonGroupOnPress | null;
}>;
export declare const usePressButtons: (opts: TOpts) => (TButtonGroupOnPress | null);
export {};
