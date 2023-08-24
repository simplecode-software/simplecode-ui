import React from 'react';

import { TCbString, TCbVoid, TSetState } from '../types';
import { emptyString } from '../constants/empty';


type TMentionOpts = Readonly<{
    setText: TSetState<string>; // returned by React.useState
}>;

type TMentionOut = Readonly<{
    mention: string;
    setMention: TSetState<string>;
    clearMention: TCbVoid;
    applyMention: TCbString;
}>;


export const useMention = ({
    setText,
}: TMentionOpts): TMentionOut => {
    const [mention, setMention] = React.useState<string>(emptyString);
    
    // Using `mentionRef` prevents re-creation of `applyMention` on every edit
    const mentionRef = React.useRef<string>(emptyString);
    
    const updateMention: TSetState<string> = React.useCallback(
        (valueOrCb) => {
            if (typeof valueOrCb === 'string') {
                mentionRef.current = valueOrCb;
                setMention(valueOrCb);
            } else {
                setMention((mention) => {
                    const newValue = valueOrCb(mention);
                    mentionRef.current = newValue;
                    return newValue;
                });
            }
        },
        [],
    );
    
    const clearMention: TCbVoid = React.useCallback(
        () => {
            mentionRef.current = emptyString;
            setMention(emptyString);
        },
        [],
    );
    
    const applyMention: TCbString = React.useCallback(
        (value) => {
            setText((text) => `${text.slice(0, -mentionRef.current.length)}${value} `);
            mentionRef.current = emptyString;
            setMention(emptyString);
        },
        [setText],
    );
    
    return {
        mention, setMention: updateMention, clearMention, applyMention,
    };
};
