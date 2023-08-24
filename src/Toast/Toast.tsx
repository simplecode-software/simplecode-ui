import React from 'react';

import {
    TSimpleCodeUiContext,
    TPropsToast,
} from '../types';
import { SimpleCodeUiContext } from '../SimpleCodeUiContext';


const Toast_: React.ForwardRefRenderFunction<unknown, TPropsToast> = (
    props,
    ref,
) => {
    const { Toast }: TSimpleCodeUiContext = React.useContext(SimpleCodeUiContext);
    
    return (
        <Toast ref={ref} {...props} />
    );
};


export const Toast = React.memo(React.forwardRef(Toast_));
