import React from 'react';

import { TCbVoid } from '../types';


type TOut = Readonly<[boolean, TCbVoid, TCbVoid, TCbVoid]>;


export const useFlag: (initialValue?: boolean) => TOut = (initialValue = false) => {
    const [isActive, setIsActive] = React.useState(initialValue === true);
    
    const activate: TCbVoid = React.useCallback(
        () => setIsActive(true),
        [],
    );
    
    const deactivate: TCbVoid = React.useCallback(
        () => setIsActive(false),
        [],
    );
    
    const toggle: TCbVoid = React.useCallback(
        () => setIsActive((current) => !current),
        [],
    );
    
    return [isActive, activate, deactivate, toggle];
};
