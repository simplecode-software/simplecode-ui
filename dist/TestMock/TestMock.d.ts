import React from 'react';
declare global {
    function __reanimatedWorkletInit(): void;
    namespace JSX {
        interface IntrinsicElements {
            'test-mock': unknown;
        }
    }
}
export declare const TestMock: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<Readonly<{
    [key: string]: unknown;
}>, "ref"> & React.RefAttributes<unknown>>>;
