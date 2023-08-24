import React from 'react';

import {
    Flex, LoadingView, TPropsFlex, TStyle,
} from '../../src';


const zIndexLoadingIcon: number = 10;

type TProps =
    TPropsFlex &
    Readonly<{
        isLoading?: boolean | null;
        label?: string | null;
        flexContainer?: number | null;
        styleContainer?: TStyle | null;
    }>;

const absStyle: TStyle = {
    zIndex: zIndexLoadingIcon,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur(2px)',
    position: 'absolute',
    justifyContent: 'center',
    cursor: 'wait',
};


const LoadingContent_: React.ForwardRefRenderFunction<HTMLDivElement, TProps> = ({
    isLoading,
    label,
    flexContainer,
    styleContainer,
    children,
    shape,
    ...flexProps
}, ref) => {
    return (
        <Flex flex={flexContainer} style={styleContainer}>
            {isLoading && (
                <LoadingView
                    colorsContainer="none"
                    colors="darktext"
                    sizeText="lg"
                    label={label}
                    isLoading
                    shape={shape}
                    style={absStyle}
                />
            )}
            
            <Flex {...flexProps} ref={ref} shape={shape}>
                {children}
            </Flex>
        </Flex>
    );
};

export const LoadingContent = React.memo(React.forwardRef(LoadingContent_));
