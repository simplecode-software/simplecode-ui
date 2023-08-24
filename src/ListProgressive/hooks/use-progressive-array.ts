import React from 'react';

import { emptyArray } from '../../constants/empty';
import { useMounted } from '../../hooks/use-mounted';
import { TPropsListProgressive } from '../types';


const defaultCountBatch = 2;
const defaultInterval = 50;


// eslint-disable-next-line react/function-component-definition
export const useProgressiveArray = <T, >({
    items = null,
    onRenderItem = null,
    countInitial = null,
    countBatch = null,
    interval = null,
}: TPropsListProgressive<T>): ReadonlyArray<React.ReactElement | null> => {
    const mounted = useMounted();
    const [countCurrent, setCountCurrent] = React.useState<number>(
        (countInitial ?? 0) < 0 ? (items?.length ?? 0) : (countInitial ?? 0),
    );
    
    const countTotal: number = items?.length ?? 0;
    const itemsFinal: ReadonlyArray<T> = items || emptyArray;
    
    const itemsCurrent = React.useMemo<ReadonlyArray<T>>(
        () => {
            return itemsFinal.slice(0, countCurrent);
        },
        [countCurrent, itemsFinal],
    );
    
    const timeoutRef = React.useRef<null | number>(null);
    
    React.useEffect(
        () => {
            if (countTotal < countCurrent) {
                setCountCurrent(countTotal);
            }
        },
        [countCurrent, countTotal],
    );
    
    React.useEffect(
        () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            
            if (countCurrent >= countTotal) {
                return;
            }
            
            if (countCurrent < countTotal) {
                const countNext = Math.min(
                    countCurrent + (countBatch || defaultCountBatch),
                    countTotal,
                );
                setTimeout(() => {
                    if (mounted()) {
                        setCountCurrent(countNext);
                    }
                }, interval || defaultInterval);
            }
        },
        [countBatch, countCurrent, countTotal, interval, mounted],
    );
    
    return itemsCurrent.map((item, index) => (
        item ? (onRenderItem?.(item, index) || null) : null
    ));
};
