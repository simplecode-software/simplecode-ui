import React from 'react';

import {
    TSimpleCodeUiContext,
    TPropsModal,
} from '../types';
import { SimpleCodeUiContext } from '../SimpleCodeUiContext';


const Modal_: React.ForwardRefRenderFunction<unknown, TPropsModal> = (props, ref) => {
    const { Modal }: TSimpleCodeUiContext = React.useContext(SimpleCodeUiContext);
    
    return (
        <Modal ref={ref} {...props} />
    );
};


export const Modal = React.memo(React.forwardRef(Modal_));
