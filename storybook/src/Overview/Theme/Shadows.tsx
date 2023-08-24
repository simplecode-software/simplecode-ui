import React from 'react';
import {
    Divider, Flex, ListItem, Txt, TStyle, Abs, TShadowName,
} from '../../../../src';

import { themeArgs, themeArgTypes } from '../../constants';
import Themed from '../../Themed';
import { TStoryAux, TStoryComponent } from '../../types';
import { sampleText } from '../constants';


const width100Style: TStyle = {
    minWidth: 100,
    marginRight: 10,
};

const styleScroll: TStyle = {
    overflow: 'scroll',
};

const shadows: ReadonlyArray<TShadowName> = ['none', 'sm', 'md', 'lg'];

export const Shadows: TStoryComponent<TStoryAux> = ({ ...aux }) => {
    return (
        <Themed theme={aux['[theme]']}>
            <Abs top={0} left={0} right={0} bottom={0} colors="primary" align="stretch">
                <Flex style={styleScroll}>
                    <ListItem size="lg" justify="flex-start" padding="0 15" colors="tertiary">
                        <Flex
                            align="center"
                            style={width100Style}
                        >
                            <Txt font="semi" size="lg" colors="tertiarytext">Size</Txt>
                        </Flex>
                        <Flex
                            flex={1}
                            align="center"
                            margin="0 10 0 0"
                        >
                            <Txt font="semi" size="lg" colors="tertiarytext">Box</Txt>
                        </Flex>
                        <Flex
                            flex={1}
                            align="center"
                            margin="0 10 0 0"
                        >
                            <Txt font="semi" size="lg" colors="tertiarytext">Text</Txt>
                        </Flex>
                    </ListItem>
                    {shadows.map((shadow, i) => (
                        <React.Fragment key={shadow}>
                            <Flex direction="row" align="center">
                                <Flex
                                    align="center"
                                    style={width100Style}
                                >
                                    <Txt size="lg" font="semi">{shadow}</Txt>
                                </Flex>
                                <Flex
                                    flex={1}
                                    padding={10}
                                >
                                    <Flex
                                        padding={24}
                                        shadow={shadow}
                                        colors="secondary"
                                    />
                                </Flex>
                                <Flex
                                    flex={1}
                                    padding={10}
                                >
                                    {shadow !== 'lg' && (
                                        <Txt
                                            shadow={shadow}
                                            colors="secondary"
                                            align="center"
                                        >
                                            {sampleText}
                                        </Txt>
                                    )}
                                </Flex>
                            </Flex>
                            {i < shadows.length - 1 && (
                                <Divider size="md" colors="tertiary" />
                            )}
                        </React.Fragment>
                    ))}
                </Flex>
            </Abs>
        </Themed>
    );
};

Shadows.args = themeArgs;

Shadows.argTypes = themeArgTypes;
