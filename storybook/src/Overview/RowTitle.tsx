import React from 'react';
import {
    TStyle, Txt,
} from '../../../src';
import { TPropsRowTitle } from '../types';


const titleStyle: TStyle = {
    width: 150,
};


const RowTitle_: React.FunctionComponent<TPropsRowTitle> = ({
    text,
}: TPropsRowTitle) => {
    return (
        <Txt
            size="lg"
            font="bold"
            style={titleStyle}
            align="right"
            margin="0 15 0 0"
        >
            {text}
        </Txt>
    );
};


export const RowTitle = React.memo(RowTitle_);
