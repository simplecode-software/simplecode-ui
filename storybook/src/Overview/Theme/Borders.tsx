import React from 'react';

import {
    Divider, Flex, ListItem, Txt, TStyle, Abs, TBorderName, Button, TShapeName, TStringList,
} from '../../../../src';
import { themeArgs, themeArgTypes } from '../../constants';
import Themed from '../../Themed';
import { TStoryAux, TStoryComponent } from '../../types';


const width100Style: TStyle = {
    minWidth: 100,
    marginRight: 10,
};

const shapes: ReadonlyArray<TShapeName> = ['lg', 'none'];
const borders: ReadonlyArray<TBorderName> = ['sm', 'md', 'lg', 'xlg'];
const suffixes: TStringList = ['', '.top', '.bottom', '.left', '.right'];

const styleScroll: TStyle = {
    overflow: 'scroll',
};


export const Borders: TStoryComponent<TStoryAux> = ({ ...aux }) => {
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
                            <Txt font="semi" size="lg" colors="tertiarytext">Full</Txt>
                        </Flex>
                        <Flex
                            flex={1}
                            align="center"
                            margin="0 10 0 0"
                        >
                            <Txt font="semi" size="lg" colors="tertiarytext">Top</Txt>
                        </Flex>
                        <Flex
                            flex={1}
                            align="center"
                            margin="0 10 0 0"
                        >
                            <Txt font="semi" size="lg" colors="tertiarytext">Bottom</Txt>
                        </Flex>
                        <Flex
                            flex={1}
                            align="center"
                        >
                            <Txt font="semi" size="lg" colors="tertiarytext">Left</Txt>
                        </Flex>
                        <Flex
                            flex={1}
                            align="center"
                        >
                            <Txt font="semi" size="lg" colors="tertiarytext">Right</Txt>
                        </Flex>
                    </ListItem>
                    {shapes.map((shape) => (
                        borders.map((border, i) => (
                            <React.Fragment key={border}>
                                <ListItem size="auto" justify="flex-start" padding="0 15" direction="row">
                                    <Flex
                                        align="center"
                                        style={width100Style}
                                    >
                                        <Txt size="lg" font="semi">{border}</Txt>
                                    </Flex>
                                    {suffixes.map((suffix) => (
                                        <Flex
                                            flex={1}
                                            padding={10}
                                        >
                                            <Button
                                                label={`${border}${suffix}` as TBorderName}
                                                border={`${border}${suffix}` as TBorderName}
                                                colors="errorghost"
                                                shape={shape}
                                                shadow="none"
                                            />
                                        </Flex>
                                    ))}
                                </ListItem>
                                {i < borders.length - 1 && (
                                    <Divider size="md" colors="tertiary" />
                                )}
                            </React.Fragment>
                        ))
                    ))}
                </Flex>
            </Abs>
        </Themed>
    );
};

Borders.args = themeArgs;

Borders.argTypes = themeArgTypes;
