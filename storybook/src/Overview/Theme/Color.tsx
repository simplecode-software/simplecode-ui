import React from 'react';
import {
    Flex, Button, showToast, TCbVoid, createTypedObjectify,
} from '../../../../src';

import { TPropsColor } from '../../types';
import { copyColor } from '../utils/copy-color';


const objectifyBg = createTypedObjectify<React.CSSProperties>();


const Color_: React.FunctionComponent<TPropsColor> = ({
    value,
    name,
    label,
}: TPropsColor) => {
    const styleBg = objectifyBg('backgroundColor', value);
    
    const copyColorCb: TCbVoid = React.useCallback(
        () => {
            const summary = copyColor(name, value);
            showToast({ text: `Color copied: ${summary}` });
        },
        [name, value],
    );
    
    return (
        <div title={name}>
            <Flex align="center" margin="1 5" direction="row">
                <Button
                    style={styleBg}
                    shape="sm"
                    shadow="md"
                    shadowText="md"
                    colors="lighttext"
                    label={label}
                    onPress={copyColorCb}
                    padding="0 10"
                />
            </Flex>
        </div>
    );
};


export const Color = React.memo(Color_);
