
import React from 'react';

import { useSwitch } from '../hooks/use-switch';
import {
    TButtonOnPress,
    TPropsCheckbox,
} from '../types';
import { ButtonCheck } from '../ButtonCheck';


const Checkbox_: React.ForwardRefRenderFunction<unknown, TPropsCheckbox> = (
    {
        onPress = null,
        onChange = null,
        value = null,
        ...propsButtonCheck
    }: TPropsCheckbox,
    ref,
) => {
    const { switchValue, toggle } = useSwitch({ onChange, value, isDisabled: false });
    
    const press: TButtonOnPress = React.useCallback(
        (_e, name) => {
            toggle();
            if (onPress) {
                onPress(_e, name);
            }
        },
        [onPress, toggle],
    );
    
    return (
        <ButtonCheck
            ref={ref}
            {...propsButtonCheck}
            isActive={switchValue}
            onPress={press}
        />
    );
};

export const Checkbox = React.memo(React.forwardRef(Checkbox_));
