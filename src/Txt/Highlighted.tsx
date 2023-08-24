import React from 'react';

import { SimpleCodeUiContext } from '../SimpleCodeUiContext';
import { TextFragment } from '../TextFragment';
import { TAnchorDescList } from '../types';
import { getAnchors } from '../utils/get-anchors';
import { Mentions } from './Mentions';


export type TProps = Readonly<{
    children?: React.ReactNode | null;
    hasMentions?: boolean | null;
    isDecorated?: boolean | null;
}>;


const Highlighted_: React.FunctionComponent<TProps> = ({
    children = null,
    hasMentions = null,
    isDecorated = null,
}: TProps) => {
    const { transformText } = React.useContext(SimpleCodeUiContext);
    
    const descs: TAnchorDescList | null = React.useMemo(
        () => {
            if (!isDecorated || typeof children !== 'string') {
                return null;
            }
            return getAnchors(children, transformText);
        },
        [children, isDecorated, transformText],
    );
    
    if (!children) {
        return null;
    }
    
    if (typeof children !== 'string') {
        return (
            // eslint-disable-next-line react/jsx-no-useless-fragment
            <>{children}</>
        );
    }
    
    if (!descs) {
        return (
            <Mentions
                text={children}
                hasMentions={hasMentions}
                isDecorated={isDecorated}
            />
        );
    }
    
    return (
        <>
            {descs.map((desc) => {
                return desc.href ? (
                    <TextFragment
                        key={desc.key}
                        href={desc.href}
                        colors={desc.href ? 'accenttext' : null}
                        state="hover"
                        size="auto"
                        shadow="none"
                        shape="none"
                    >
                        <Mentions
                            text={desc.text}
                            hasMentions={hasMentions}
                        />
                    </TextFragment>
                ) : (
                    <React.Fragment key={desc.key}>
                        <Mentions
                            text={desc.text}
                            hasMentions={hasMentions}
                        />
                    </React.Fragment>
                );
            })}
        </>
    );
};


export const Highlighted = React.memo(Highlighted_);
