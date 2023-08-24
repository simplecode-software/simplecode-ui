import React from 'react';

import {
    TSimpleCodeUiContext,
    TPropsIconComponent,
} from '../types';
import { SimpleCodeUiContext } from '../SimpleCodeUiContext';


const LoadingIcon_: React.ForwardRefRenderFunction<unknown, TPropsIconComponent> = (
    props,
    ref,
) => {
    const { LoadingIcon }: TSimpleCodeUiContext = React.useContext(SimpleCodeUiContext);
    
    return (
        <LoadingIcon ref={ref} {...props} />
    );
};


export const LoadingIcon = React.memo(React.forwardRef(LoadingIcon_));
