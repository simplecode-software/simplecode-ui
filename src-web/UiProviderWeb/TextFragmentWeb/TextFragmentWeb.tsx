import { Interpolation, Theme } from '@emotion/react';
import React from 'react';
import {
    TPropsTextFragment,
} from '../../../src';

import { Element } from '../Element';
import useTextStyle from './hooks/use-text-style';


const TextFragment_: React.ForwardRefRenderFunction<unknown, TPropsTextFragment> = (props, ref) => {
    const {
        children = null,
        href = null,
        onPress = null,
        testId = null,
        custom = null,
        Component = null,
    } = props;
    
    const textStyle = useTextStyle(props);
    
    return (
        <Element
            ref={ref}
            Component={Component || (href ? 'a' : 'span')}
            href={href}
            data-testid={testId ?? undefined}
            css={textStyle as Interpolation<Theme>}
            onClick={onPress ?? undefined}
            {...custom}
        >
            {children}
        </Element>
    );
};


export const TextFragment = React.memo(React.forwardRef(TextFragment_));
