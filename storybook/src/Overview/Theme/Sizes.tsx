import React from 'react';
import {
    Divider, Flex, ListItem, Txt, TStyle, Abs, Icon, TSpecSize, Button,
} from '../../../../src';

import { themeArgs, themeArgTypes } from '../../constants';
import Themed from '../../Themed';
import { TStoryAux, TStoryComponent } from '../../types';


const width100Style: TStyle = {
    minWidth: 100,
    marginRight: 10,
};

const sizes: ReadonlyArray<TSpecSize> = ['xxsm', 'xsm', 'sm', 'md', 'lg', 'xlg', 'xxlg', 'auto'];

const styleScroll: TStyle = {
    overflow: 'scroll',
};


export const Sizes: TStoryComponent<TStoryAux> = ({ ...aux }) => {
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
                            <Txt font="semi" size="lg" colors="tertiarytext">Text</Txt>
                        </Flex>
                        <Flex
                            flex={1}
                            align="center"
                            margin="0 10 0 0"
                        >
                            <Txt font="semi" size="lg" colors="tertiarytext">Icon</Txt>
                        </Flex>
                        <Flex
                            flex={1}
                            align="center"
                            margin="0 10 0 0"
                        >
                            <Txt font="semi" size="lg" colors="tertiarytext">Button</Txt>
                        </Flex>
                        <Flex
                            flex={1}
                            align="center"
                        >
                            <Txt font="semi" size="lg" colors="tertiarytext">Divider</Txt>
                        </Flex>
                        <Flex
                            flex={1}
                            align="center"
                        >
                            <Txt font="semi" size="lg" colors="tertiarytext">ListItem</Txt>
                        </Flex>
                    </ListItem>
                    {sizes.map((size, i) => (
                        <React.Fragment key={size}>
                            <Flex direction="row" align="center">
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
                                >
                                    <Txt
                                        size={size}
                                        colors="error"
                                        align="center"
                                        isOpaque
                                    >
                                        Text
                                    </Txt>
                                </Flex>
                                <Flex
                                    flex={1}
                                    padding={10}
                                    align="center"
                                >
                                    <Icon
                                        size={size}
                                        colors="error"
                                    />
                                </Flex>
                                <Flex
                                    flex={1}
                                    padding={10}
                                    align="center"
                                >
                                    <Button
                                        size={size}
                                        colors="error"
                                        label="Button"
                                        padding="0 15"
                                    />
                                </Flex>
                                <Flex
                                    flex={1}
                                    padding={10}
                                    align="center"
                                >
                                    <Divider
                                        size={size}
                                        colors="error"
                                        padding="0 50"
                                    />
                                </Flex>
                                <Flex
                                    flex={1}
                                    padding={10}
                                    align="center"
                                >
                                    <ListItem
                                        size={size}
                                        colors="error"
                                        padding="0 15"
                                        label="ListItem"
                                    />
                                </Flex>
                            </Flex>
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

Sizes.args = themeArgs;

Sizes.argTypes = themeArgTypes;
