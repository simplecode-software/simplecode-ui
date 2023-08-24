import React from 'react';

import { TestRenderer } from '../TestRenderer';


type TRet<T> = Readonly<{
    Wrapper: React.ComponentType<T>;
}>;

type THook<T> = (props: T) => unknown;


export const getHookWrapper = <TProps extends React.PropsWithChildren, >(
    _: THook<TProps>,
): TRet<TProps> => {
    const Wrapper: React.ComponentType<TProps> = ({
        children,
    }) => {
        return (
            <TestRenderer>
                {children}
            </TestRenderer>
        );
    };

    return {
        Wrapper,
    };
};
