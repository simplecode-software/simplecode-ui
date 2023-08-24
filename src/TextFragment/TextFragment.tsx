import React from 'react';

import {
    TSimpleCodeUiContext,
    TPropsTextFragment,
} from '../types';
import { SimpleCodeUiContext } from '../SimpleCodeUiContext';


const TextFragment_: React.ForwardRefRenderFunction<unknown, TPropsTextFragment> = (
    props,
    ref,
) => {
    const { TextFragment }: TSimpleCodeUiContext = React.useContext(SimpleCodeUiContext);
    
    return (
        <TextFragment ref={ref} {...props} />
    );
};


export const TextFragment = React.memo(React.forwardRef(TextFragment_));
