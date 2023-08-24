import React from 'react';

import { TMentionContext } from '../types';
import { MentionContext } from '../MentionContext';


type TProps = Partial<TMentionContext> & Readonly<{
    children?: React.ReactNode;
}>;


const MentionProvider_: React.FunctionComponent<TProps> = ({
    name = null,
    colors = null,
    colorsSelf = null,
    children = null,
}) => {
    const value: TMentionContext = React.useMemo(
        () => ({
            name, colors, colorsSelf,
        }),
        [name, colors, colorsSelf],
    );
    
    return (
        <MentionContext.Provider value={value}>
            {children}
        </MentionContext.Provider>
    );
};

export const MentionProvider = React.memo(MentionProvider_);
