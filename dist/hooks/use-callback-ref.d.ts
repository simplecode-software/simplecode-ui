type TFn = (...args: ReadonlyArray<never>) => unknown;
/**
 * Utilize `useCallbackRef` if calling a callback memoized with `React.useCallback` causes changes
 * of its own dependencies which may trigger unwanted renders, for example if the callback is used
 * in a render function.
 */
export declare const useCallbackRef: <T extends TFn>(fn: T) => T;
export {};
