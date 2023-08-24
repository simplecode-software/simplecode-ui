import React from 'react';

import { TUnknownObject } from '../types';


declare global {
    function __reanimatedWorkletInit(): void;
    
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'test-mock': unknown;
        }
    }
}


const TestMock_: React.ForwardRefRenderFunction<unknown, TUnknownObject> = (props, ref) => {
    return (
        <test-mock ref={ref} {...props} />
    );
};

export const TestMock = React.memo(React.forwardRef(TestMock_));
