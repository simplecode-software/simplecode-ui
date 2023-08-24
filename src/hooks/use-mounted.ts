import React from 'react';


type TMounted = () => boolean;

type TUseMounted = () => TMounted;


export const useMounted: TUseMounted = () => {
    const isMounted = React.useRef<boolean>(true);
    React.useEffect(
        () => {
            isMounted.current = true;
            return () => {
                isMounted.current = false;
            };
        },
        [],
    );
    const mounted: () => boolean = React.useCallback(
        () => isMounted.current,
        [],
    );
    return mounted;
};
