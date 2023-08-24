import React from 'react';
import {
    Checkbox, showToast, TCbVoid,
} from '../../../../src';
import { TPropsVariantCheckbox } from '../../types';

import { copyCheckboxJsx } from './utils/copy-checkbox-jsx';


const VariantCheckbox_: React.FunctionComponent<TPropsVariantCheckbox> = ({
    button,
    colorSetName,
}: TPropsVariantCheckbox) => {
    const copyJsx: TCbVoid = React.useCallback(
        () => {
            const summary = copyCheckboxJsx(button, colorSetName);
            showToast({ text: `JSX copied: ${summary}` });
        },
        [button, colorSetName],
    );
    
    return (
        <Checkbox
            {...button}
            colors={colorSetName}
            margin={4}
            padding="0 15 0 0"
            label={colorSetName}
            onPress={copyJsx}
        />
    );
};


export const VariantCheckbox = React.memo(VariantCheckbox_);
