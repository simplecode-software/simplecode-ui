import React from 'react';


type TFn = (...args: ReadonlyArray<never>) => unknown;


/**
 * Utilize `useCallbackRef` if calling a callback memoized with `React.useCallback` causes changes
 * of its own dependencies which may trigger unwanted renders, for example if the callback is used
 * in a render function.
 */
export const useCallbackRef = <T extends TFn>(fn: T): T => {
    const selectRef = React.useRef<T>(fn);
    
    React.useEffect(
        () => {
            selectRef.current = fn;
        },
    );
    
    const selectRefMemoized = React.useMemo<T>(
        () => ((...args) => selectRef.current(...args)) as T,
        [],
    );
    
    return selectRefMemoized as T;
};
