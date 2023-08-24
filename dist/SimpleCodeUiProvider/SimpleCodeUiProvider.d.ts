import React from 'react';
import { TSimpleCodeUiContext } from '../types';
type TProps = Partial<TSimpleCodeUiContext> & Readonly<{
    children?: React.ReactNode;
}>;
export declare const SimpleCodeUiProvider: React.NamedExoticComponent<TProps>;
export {};
