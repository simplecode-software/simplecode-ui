import React from 'react';

import {
    TColorSet, TMentionContext, TPropsTextFragment,
} from '../types';
import { TextFragment } from '../TextFragment';
import { MentionContext } from '../MentionContext';


const colorsDefault: TColorSet = {
    text: 'text.primary',
    textHover: 'text.primaryplus',
    textActive: 'text.primaryminus',
    bg: 'bg.secondaryminus',
    bgHover: 'bg.secondaryminus',
    bgActive: 'bg.secondaryminus',
    border: 'bg.secondaryminus',
    borderHover: 'bg.secondaryminus',
    borderActive: 'bg.secondaryminus',
};


const Mention_: React.FunctionComponent<TPropsTextFragment> = ({
    font = null,
    size = null,
    shadow = null,
    shadowBox = null,
    shape = null,
    padding = null,
    ...propsTextFragment
}: TPropsTextFragment) => {
    const { name, colors, colorsSelf }: TMentionContext = React.useContext(MentionContext);
    
    if (!propsTextFragment.children) {
        return null;
    }
    
    const isSelf = (propsTextFragment.children === `@${name}`);
    
    return (
        <TextFragment
            {...propsTextFragment}
            font={font || 'semi'}
            size={size || 'auto'}
            shadow={shadow || 'none'}
            shadowBox={shadowBox || 'none'}
            colors={(isSelf ? colorsSelf : colors) || colorsDefault}
            shape={shape || 'sm'}
            padding={padding ?? '0 5'}
            isOpaque
        />
    );
};


export const Mention = React.memo(Mention_);
