import React from 'react';

import {
    Flex, Abs, Txt, TStyle,
} from '../../../../src';
import Themed from '../../Themed';
import { TPropsPage } from '../../types';
import { backStyle } from '../constants';


const styleScroll: TStyle = {
    overflow: 'scroll',
};

const Page_: React.FunctionComponent<TPropsPage> = ({
    theme = null,
    title,
    children = null,
}: TPropsPage) => {
    return (
        <Themed theme={theme}>
            <Abs top={0} left={0} right={0} bottom={0} colors="primary" align="center" style={backStyle}>
                <Txt
                    size="xlg"
                    font="bold"
                    margin="25"
                >
                    {title}
                </Txt>
                <Flex style={styleScroll}>
                    {children}
                </Flex>
            </Abs>
        </Themed>
    );
};


export const Page = React.memo(Page_);
