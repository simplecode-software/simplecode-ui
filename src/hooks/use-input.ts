import React from 'react';

import { TCbString, TCbVoid, TOnPress } from '../types';


type TIn = Readonly<{
    onChangeText: TCbString | null;
    onBlur?: TCbVoid | null;
    onFocus?: TCbVoid | null;
}>;

type TOut = Readonly<{
    isPassVisible: boolean;
    isFocused: boolean;
    togglePassVisible: TOnPress;
    clear: TOnPress;
    focus: TCbVoid;
    unfocus: TCbVoid;
}>;


export const useInput: (params: TIn) => TOut = ({
    onChangeText,
    onBlur = null,
    onFocus = null,
}) => {
    const [isPassVisible, setIsPassVisible] = React.useState<boolean>(false);
    const [isFocused, setIsFocused] = React.useState<boolean>(false);
    
    const togglePassVisible: TOnPress = React.useCallback(
        (event) => {
            event.preventDefault();
            setIsPassVisible((isPassVisible) => !isPassVisible);
        },
        [],
    );
    
    const clear: TOnPress = React.useCallback(
        (event) => {
            event.preventDefault();
            if (onChangeText) {
                onChangeText('');
            }
        },
        [onChangeText],
    );
    
    const focus: TCbVoid = React.useCallback(
        () => {
            setIsFocused(true);
            if (onFocus) {
                onFocus();
            }
        },
        [onFocus],
    );
    
    const unfocus: TCbVoid = React.useCallback(
        () => {
            setIsFocused(false);
            if (onBlur) {
                onBlur();
            }
        },
        [onBlur],
    );
    
    return {
        isPassVisible,
        isFocused,
        togglePassVisible,
        clear,
        focus,
        unfocus,
    };
};
