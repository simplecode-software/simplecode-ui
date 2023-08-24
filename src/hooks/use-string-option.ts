import React from 'react';
import { TSelectOnChange } from '../types';


type TOut = Readonly<[string, TSelectOnChange]>;


export const useStringOption: (initialValue: string) => TOut = (initialValue) => {
    const [value, setValue] = React.useState(initialValue);
    
    const setNotEmpty: TSelectOnChange = React.useCallback(
        (newValue) => {
            if (newValue !== null) {
                setValue(newValue);
            }
        },
        [],
    );
    
    return [value, setNotEmpty];
};

