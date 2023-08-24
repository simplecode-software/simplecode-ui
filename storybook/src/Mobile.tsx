import React from 'react';
import {
    Flex, ListItem, TStyle,
} from '../../src';

import Themed from './Themed';
import { TPropsMobile } from './types';


const containerStyle: TStyle = {
    width: '100vw',
    maxWidth: 600,
    margin: '0 auto',
    height: '100vh',
    minHeight: 600,
    cursor: 'default',
    userSelect: 'none',
    zIndex: -1,
    
    backgroundColor: 'red',
};


const Mobile: React.FunctionComponent<TPropsMobile> = ({
    children = null,
    theme = null,
    colors = null,
}: TPropsMobile) => {
    return (
        <Themed theme={theme}>
            <Flex flex={1} align="center">
                <Flex
                    style={containerStyle}
                    colors="primary"
                    testId="Storybook:Mobile:Screen"
                >
                    <ListItem colors="dark" />
                    <Flex flex={1} colors={colors || 'primary'}>
                        {children}
                    </Flex>
                    <ListItem size="xlg" colors="primary" shadow="md" />
                </Flex>
            </Flex>
        </Themed>
    );
};


export default React.memo(Mobile);
