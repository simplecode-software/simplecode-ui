import React from 'react';

import { TextFragment } from '../TextFragment';
import { TPropsTxt } from '../types';
import { Highlighted } from './Highlighted';


const Txt_: React.ForwardRefRenderFunction<unknown, TPropsTxt> = (
    {
        hasMentions = null,
        isDecorated = null,
        children = null,
        ...propsTextFragment
    }: TPropsTxt,
    ref,
) => (
    <TextFragment ref={ref} {...propsTextFragment}>
        {!children ? null : (
            <Highlighted hasMentions={hasMentions} isDecorated={isDecorated}>
                {children}
            </Highlighted>
        )}
    </TextFragment>
);


export const Txt = React.memo(React.forwardRef(Txt_));
