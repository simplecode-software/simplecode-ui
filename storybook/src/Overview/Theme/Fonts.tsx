import React from 'react';
import {
    Divider, Flex, ListItem, Txt, TSpecSize, TStyle, Abs,
} from '../../../../src';

import { themeArgs, themeArgTypes } from '../../constants';
import Themed from '../../Themed';
import { TStoryAux, TStoryComponent } from '../../types';
import { sampleText } from '../constants';


const width100Style: TStyle = {
    minWidth: 100,
    marginRight: 10,
};

const sizes: ReadonlyArray<TSpecSize> = ['xxsm', 'xsm', 'sm', 'md', 'lg', 'xlg', 'xxlg'];

const styleScroll: TStyle = {
    overflow: 'scroll',
};


export const Fonts: TStoryComponent<TStoryAux> = ({ ...aux }) => {
    return (
        <Themed theme={aux['[theme]']}>
            <Abs top={0} left={0} right={0} bottom={0} colors="primary">
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
                            <Txt font="semi" size="lg" colors="tertiarytext">Regular</Txt>
                        </Flex>
                        <Flex
                            flex={1}
                            align="center"
                            margin="0 10 0 0"
                        >
                            <Txt font="semi" size="lg" colors="tertiarytext">Semi</Txt>
                        </Flex>
                        <Flex
                            flex={1}
                            align="center"
                        >
                            <Txt font="semi" size="lg" colors="tertiarytext">Bold</Txt>
                        </Flex>
                    </ListItem>
                    {sizes.map((size, i) => (
                        <React.Fragment key={size}>
                            <ListItem size="auto" justify="flex-start" padding="0 15" direction="row">
                                <Flex
                                    align="center"
                                    style={width100Style}
                                >
                                    <Txt size="lg" font="semi">{size}</Txt>
                                </Flex>
                                <Flex
                                    flex={1}
                                    padding={10}
                                    align="center"
                                    margin="0 10 0 0"
                                >
                                    <Txt size={size} font="regular">{sampleText}</Txt>
                                </Flex>
                                <Flex
                                    flex={1}
                                    padding={10}
                                    align="center"
                                    margin="0 10 0 0"
                                >
                                    <Txt size={size} font="semi">{sampleText}</Txt>
                                </Flex>
                                <Flex
                                    flex={1}
                                    padding={10}
                                    align="center"
                                    margin="0 10 0 0"
                                >
                                    <Txt size={size} font="bold">{sampleText}</Txt>
                                </Flex>
                                <Flex
                                    flex={1}
                                    padding={10}
                                    align="center"
                                >
                                    <Txt size={size} font="black">{sampleText}</Txt>
                                </Flex>
                            </ListItem>
                            {i < sizes.length - 1 && (
                                <Divider size="md" colors="tertiary" />
                            )}
                        </React.Fragment>
                    ))}
                </Flex>
            </Abs>
        </Themed>
    );
};

Fonts.args = themeArgs;

Fonts.argTypes = themeArgTypes;
