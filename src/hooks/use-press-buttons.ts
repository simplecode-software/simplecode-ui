import React from 'react';

import { emptyArray } from '../constants/empty';
import {
    TActiveButtons,
    TButtonGroupBehavior,
    TButtonGroupOnPress,
} from '../types';


type TOpts = Readonly<{
    active?: TActiveButtons | null;
    behavior?: TButtonGroupBehavior | null;
    onPress?: TButtonGroupOnPress | null;
}>;


export const usePressButtons: (opts: TOpts) => (TButtonGroupOnPress | null) = ({
    active = null,
    behavior = null,
    onPress = null,
}) => {
    const press: TButtonGroupOnPress = React.useCallback(
        (e, buttons, name) => {
            if (!buttons || !onPress) {
                return;
            }
            if (behavior !== 'checkbox') {
                if (typeof buttons === 'string' && buttons !== active) {
                    onPress(e, buttons, name);
                }
                return;
            }
            
            const activeArray = (typeof active === 'string' || !active) ? emptyArray : active;
            
            if (typeof buttons !== 'string') {
                onPress(e, buttons, name);
                return;
            }
            
            const buttonsString: string = buttons;
            
            if (activeArray && activeArray.includes(buttonsString)) {
                const nameAt = activeArray.findIndex((v) => buttonsString === v);
                onPress(
                    e,
                    [
                        ...activeArray.slice(0, nameAt),
                        ...activeArray.slice(nameAt + 1),
                    ],
                    name,
                );
                return;
            }
            onPress(e, [...activeArray, buttonsString], name);
        },
        [onPress, active, behavior],
    );
    
    return onPress ? press : null;
};
