import React from 'react';

import { useFlag } from '../hooks/use-flag';
import { useMounted } from '../hooks/use-mounted';
import { TEmptyObject } from '../types';


export const withAsync = <T extends TEmptyObject>(
    Component: React.ComponentType<T>,
    Fallback: React.ComponentType<T> | null = null,
    delay: number | null = null,
): React.ComponentType<T> => {
    const Async: React.FunctionComponent<T> = (props) => {
        const [isVisible, show] = useFlag();
        const mounted = useMounted();
        
        React.useEffect(
            () => {
                setTimeout(() => {
                    if (mounted()) {
                        show();
                    }
                }, delay ?? 20);
            },
            [show, mounted],
        );
        
        if (!isVisible) {
            if (!Fallback) {
                return null;
            }
            return (
                <Fallback {...props} />
            );
        }
        
        return (
            <Component {...props} />
        );
    };

    return Async;
};
