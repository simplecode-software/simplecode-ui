import React from 'react';

import {
    TSimpleCodeUiContext,
    TPropsFlex,
} from '../types';
import { SimpleCodeUiContext } from '../SimpleCodeUiContext';


const Flex_: React.ForwardRefRenderFunction<unknown, TPropsFlex> = (props, ref) => {
    const { Flex }: TSimpleCodeUiContext = React.useContext(SimpleCodeUiContext);
    
    return (
        <Flex ref={ref} {...props} />
    );
};


export const Flex = React.memo(React.forwardRef(Flex_));
