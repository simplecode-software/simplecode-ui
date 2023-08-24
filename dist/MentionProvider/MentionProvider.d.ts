import React from 'react';
import { TMentionContext } from '../types';
type TProps = Partial<TMentionContext> & Readonly<{
    children?: React.ReactNode;
}>;
export declare const MentionProvider: React.NamedExoticComponent<TProps>;
export {};
