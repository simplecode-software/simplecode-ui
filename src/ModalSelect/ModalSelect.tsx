import React from 'react';

import {
    TSimpleCodeUiContext,
    TPropsModalSelect,
} from '../types';
import { SimpleCodeUiContext } from '../SimpleCodeUiContext';


const ModalSelect_: React.ForwardRefRenderFunction<unknown, TPropsModalSelect> = (props, ref) => {
    const { ModalSelect }: TSimpleCodeUiContext = React.useContext(SimpleCodeUiContext);
    
    return (
        <ModalSelect ref={ref} {...props} />
    );
};


export const ModalSelect = React.memo(React.forwardRef(ModalSelect_));
