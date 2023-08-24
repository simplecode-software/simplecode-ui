import React from 'react';

import {
    TSimpleCodeUiContext,
    TPropsInputZone,
} from '../types';
import { SimpleCodeUiContext } from '../SimpleCodeUiContext';


const InputZone_: React.ForwardRefRenderFunction<unknown, TPropsInputZone> = (props, ref) => {
    const { InputZone }: TSimpleCodeUiContext = React.useContext(SimpleCodeUiContext);
    
    return (
        <InputZone ref={ref} {...props} />
    );
};


export const InputZone = React.memo(React.forwardRef(InputZone_));
