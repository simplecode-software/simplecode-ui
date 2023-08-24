import React from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { TPropsFlex } from '../../../src';

import { Element } from '../Element';
import useFlexStyle from './hooks/use-flex-style';


const FlexWeb_: React.ForwardRefRenderFunction<unknown, TPropsFlex> = (props, ref) => {
    const {
        children = null,
        Component = null,
        href = null,
        onPress = null,
        onPressIn = null,
        onPressOut = null,
        isDisabled = null,
        testId = null,
        custom = null,
    } = props;
    
    const containerStyle = useFlexStyle(props);
    
    return (
        <Element
            ref={ref}
            Component={Component || (href ? 'a' : 'div')}
            href={href}
            onClick={isDisabled ? undefined : (onPress || undefined)}
            disabled={isDisabled}
            data-testid={testId ?? undefined}
            css={containerStyle as Interpolation<Theme>}
            onMouseEnter={isDisabled ? undefined : (onPressIn || undefined)}
            onMouseLeave={onPressOut || undefined}
            {...custom}
        >
            {children}
        </Element>
    );
};


export const FlexWeb = React.memo(React.forwardRef(FlexWeb_));
