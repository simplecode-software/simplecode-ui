import React from 'react';
import {
    Button, showToast, TCbVoid,
} from '../../../../src';
import { TPropsVariantButton } from '../../types';

import { copyButtonJsx } from './utils/copy-button-jsx';
import { extendColorSetName } from './utils/extend-color-set-name';


const VariantButton_: React.FunctionComponent<TPropsVariantButton> = ({
    button,
    sizeName,
    colorSetName,
}: TPropsVariantButton) => {
    const colors = extendColorSetName(colorSetName, button.colors);
    
    const copyJsx: TCbVoid = React.useCallback(
        () => {
            const summary = copyButtonJsx(button, sizeName, colors);
            showToast({ text: `JSX copied: ${summary}` });
        },
        [button, colors, sizeName],
    );
    
    return (
        <Button
            {...button}
            colors={colors}
            margin={4}
            padding={15}
            size={sizeName}
            onPress={copyJsx}
        />
    );
};


export const VariantButton = React.memo(VariantButton_);
