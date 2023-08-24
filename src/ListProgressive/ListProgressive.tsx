import React from 'react';

import { useProgressiveArray } from './hooks/use-progressive-array';
import { TPropsListProgressive } from './types';


// eslint-disable-next-line react/function-component-definition
const ListProgressive_ = <T, >(
    props: TPropsListProgressive<T>,
): React.ReactElement => {
    const elements = useProgressiveArray(props);
    
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{elements}</>
    );
};

export const ListProgressive = React.memo(ListProgressive_) as typeof ListProgressive_;
