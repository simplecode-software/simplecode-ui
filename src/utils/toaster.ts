import { TCb, TToastProps } from '../types';
import { getLogger } from './log-interface';


type TShowToastFn = TCb<TToastProps>;

const defaultShowToast: TShowToastFn = () => {
    getLogger().warn('Toaster.showToastCached not assigned.');
};

let showToastCached: TShowToastFn = defaultShowToast;


export const setShowToast = (newShowToast: TShowToastFn | null): void => {
    showToastCached = newShowToast || defaultShowToast;
};


export const showToast: TShowToastFn = (props: TToastProps) => showToastCached(props);

export const showToastError: TShowToastFn = (props: TToastProps) => showToastCached({
    ...props,
    lineColors: 'error',
});

export const showToastSuccess: TShowToastFn = (props: TToastProps) => showToastCached({
    ...props,
    lineColors: 'success',
});
