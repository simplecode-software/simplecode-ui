import React from 'react';

import { Mention } from '../Mention';
import {
    TMentionDescList, TPropsMentions,
} from '../types';
import { getMentions } from '../utils/get-mentions';
import { SimpleCodeUiContext } from '../SimpleCodeUiContext';


const Mentions_: React.FunctionComponent<TPropsMentions> = ({
    text,
    hasMentions = null,
    isDecorated = null,
}: TPropsMentions) => {
    const { transformText } = React.useContext(SimpleCodeUiContext);
    
    const unescaped = React.useMemo<string>(
        () => {
            if (isDecorated) {
                return transformText(text);
            }
            return text;
        },
        [transformText, text, isDecorated],
    );
    
    const mentions = React.useMemo<TMentionDescList | null>(
        () => (hasMentions ? getMentions(unescaped) : null),
        [hasMentions, unescaped],
    );
    
    if (!mentions) {
        return (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>{unescaped}</>
        );
    }
    
    return (
        <>
            {mentions.map((mention) => {
                return mention.isMention ? (
                    <Mention key={mention.key}>{mention.text}</Mention>
                ) : (
                    mention.text
                );
            })}
        </>
    );
};


export const Mentions = React.memo(Mentions_);
