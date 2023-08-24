import React from 'react';
import {
    Txt, showToast, TCbVoid,
} from '../../../../src';
import { TPropsVariantTxt } from '../../types';

import { copyTxtJsx } from './utils/copy-txt-jsx';


const VariantTxt_: React.FunctionComponent<TPropsVariantTxt> = ({
    txt,
    fontName,
}: TPropsVariantTxt) => {
    const copyJsx: TCbVoid = React.useCallback(
        () => {
            const summary = copyTxtJsx(txt, fontName);
            showToast({ text: `JSX copied: ${summary}` });
        },
        [txt, fontName],
    );
    
    return (
        <Txt
            {...txt}
            font={fontName}
            margin={4}
            padding={15}
            onPress={copyJsx}
        >
            {`Txt ${fontName || 'regular'}`}
        </Txt>
    );
};


export const VariantTxt = React.memo(VariantTxt_);
