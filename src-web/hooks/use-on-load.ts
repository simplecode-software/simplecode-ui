import React from 'react';

type THook = (
    load: () => void,
) => void;

export const useOnLoad: THook = (load) => {
    const isLoadedRef = React.useRef<boolean>(false);
    
    React.useEffect(
        () => {
            if (isLoadedRef.current) {
                return;
            }

            load();

            isLoadedRef.current = true;
        },
        [load],
    );
};
