import { TCb, TToastProps } from '../types';
type TShowToastFn = TCb<TToastProps>;
export declare const setShowToast: (newShowToast: TShowToastFn | null) => void;
export declare const showToast: TShowToastFn;
export declare const showToastError: TShowToastFn;
export declare const showToastSuccess: TShowToastFn;
export {};
