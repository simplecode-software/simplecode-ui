import React from 'react';

import { useCallbackRef, useFlag, useMounted } from '../../../src';
import { useOnLoad } from '../../hooks/use-on-load';


type THook = (data: Readonly<{
    targetElement?: HTMLElement | null;
}>) => boolean;

type TRect = Readonly<{
    bottomPrev: number;
    leftPrev: number;
    rightPrev: number;
    topPrev: number;
}>;

const defaultRect: TRect = {
    bottomPrev: 0, leftPrev: 0, rightPrev: 0, topPrev: 0,
};


export const usePositionObserver: THook = ({
    targetElement,
}) => {
    const prevPositionRef = React.useRef<TRect>(defaultRect);
    const [trigger, , , actionTrigger] = useFlag();
    const mounted = useMounted();
    
    const observe: () => void = useCallbackRef(
        () => {
            if (!mounted() || !targetElement) {
                return;
            }

            const {
                bottomPrev, leftPrev, rightPrev, topPrev,
            } = prevPositionRef.current;
            const {
                bottom, left, right, top,
            } = targetElement.getBoundingClientRect();

            if (bottomPrev !== bottom || leftPrev !== left || rightPrev !== right || topPrev !== top) {
                actionTrigger();
            }

            prevPositionRef.current = {
                bottomPrev: bottom,
                leftPrev: left,
                rightPrev: right,
                topPrev: top,
            };
        },
    );
    
    const observerLoop: () => void = useCallbackRef(
        () => {
            if (!mounted()) {
                return;
            }
            
            observe();
            requestAnimationFrame(observerLoop);
        },
    );
    
    useOnLoad(observerLoop);
    
    return trigger;
};
