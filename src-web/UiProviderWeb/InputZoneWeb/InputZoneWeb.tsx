import { Interpolation, Theme } from '@emotion/react';
import React from 'react';

import {
    TStyle, TPropsInputZone, TDict,
} from '../../../src';
import { Element } from '../Element';


const inputStyleBase: TStyle = {
    flex: 1,
    minWidth: 42,
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent',
    '&:hover,&:focus,&:active': {
        outline: 'none',
        border: 'none',
        backgroundColor: 'transparent',
    },
} as TStyle;

const styles: TDict<TStyle> = {
    input: {
        ...inputStyleBase,
        padding: '0 10px',
    },
    inputMulti: {
        ...inputStyleBase,
        padding: '5px 10px',
    },
    inputWrapper: {
        height: '100%',
        overflow: 'hidden',
    },
};

const InputZoneWeb_: React.ForwardRefRenderFunction<unknown, TPropsInputZone> = (
    {
        isDisabled = null,
        isMulti = null,
        isAuto = null,
        placeholder = null,
        max = null,
        secureTextEntry = null,
        onBlur = null,
        onFocus = null,
        autoCapitalize = null,
        isReadonly = null,
        value = null,
        style = null,
        onChange = null,
        onFocuser = null,
        autoCorrect = null,
        custom = null,
    },
    ref,
) => {
    const inputRef = React.useRef<HTMLElement>(null);
    
    const focus: () => void = React.useCallback(
        () => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        },
        [],
    );
    
    React.useEffect(
        () => {
            if (!onFocuser) {
                return undefined;
            }
            
            onFocuser({ focus });
            
            return () => {
                onFocuser(null);
            };
        },
        [focus, onFocuser],
    );
    
    const platformStyle = React.useMemo<TStyle>(
        () => {
            return [
                style,
                isMulti ? styles.inputMulti : styles.input,
                { outline: 'none' },
            ];
        },
        [isMulti, style],
    );
    
    const uppateInput: (e: React.ChangeEvent<HTMLInputElement>) => void = React.useCallback(
        (event) => {
            if (onChange) {
                onChange(event.target.value);
            }
        },
        [onChange],
    );
    
    return (
        <Element
            ref={ref}
            Component={isMulti ? 'textarea' : 'input'}
            type={secureTextEntry ? 'password' : 'text'}
            placeholder={placeholder ?? undefined}
            onChange={uppateInput}
            maxLength={(max && max > 0) ? max ?? undefined : undefined}
            onFocus={onFocus ?? undefined}
            onBlur={onBlur ?? undefined}
            value={value || ''}
            css={platformStyle as Interpolation<Theme>}
            autoComplete={autoCorrect ? 'on' : undefined}
            autoCorrect={autoCorrect ? 'on' : undefined}
            spellCheck={autoCorrect ? 'true' : undefined}
            autoCapitalize={autoCapitalize ? 'on' : undefined}
            autoFocus={isAuto ?? undefined}
            disabled={isDisabled}
            readOnly={isReadonly}
            custom={custom}
        />
    );
};


export const InputZoneWeb = React.memo(React.forwardRef(InputZoneWeb_));
