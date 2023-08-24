import React from 'react';
import { VscLoading } from 'react-icons/vsc';
import { css, keyframes, SerializedStyles } from '@emotion/react';
import { TPropsIconComponent } from '../../../src';


const bounce = keyframes`
    from {
        transform: rotate(0deg);
    }
  
    to {
        transform: rotate(720deg);
    }
`;

const cssIcon: SerializedStyles = css`
    animation: ${bounce} 2s infinite;
`;

const LoadingIconWeb_: React.FunctionComponent<TPropsIconComponent> = ({
    color,
    size,
}) => {
    return (
        <VscLoading
            color={color ?? undefined}
            size={size || undefined}
            css={cssIcon}
        />
    );
};


export const LoadingIconWeb = React.memo(LoadingIconWeb_);
