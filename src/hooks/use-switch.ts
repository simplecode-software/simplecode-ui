import React from 'react';

import { TCbBool, TCbVoid } from '../types';


type TIn = Readonly<{
    onChange?: TCbBool | null;
    value?: boolean | null;
    isDisabled?: boolean | null;
}>;

type TOut = Readonly<{
    switchValue: boolean;
    toggle: TCbVoid;
}>;


export const useSwitch: (params: TIn) => TOut = ({
    onChange = null,
    value = null,
    isDisabled = null,
}) => {
    const [switchValue, setSwitchValue] = React.useState<boolean>(value || false);
    
    React.useEffect(
        () => {
            if (typeof value === 'boolean') {
                setSwitchValue(value);
            }
        },
        [value],
    );

    const toggle: TCbVoid = React.useCallback(
        () => {
            if (isDisabled) {
                return;
            }
            const newSwitchValue = !switchValue;
            setSwitchValue(newSwitchValue);
            if (onChange) {
                onChange(newSwitchValue);
            }
        },
        [isDisabled, onChange, switchValue],
    );
    
    return {
        switchValue,
        toggle,
    };
};

