import React from 'react';

import {
    Divider, Flex, ListItem, Txt, TStyle, Abs, TColorSet, TTheme,
} from '../../../../src';
import { themeArgs, themeArgTypes } from '../../constants';
import Themed from '../../Themed';
import { TStoryAux, TStoryComponent } from '../../types';
import { getTheme } from '../../utils/get-theme';
import { backStyle } from '../constants';


const width150Style: TStyle = {
    minWidth: 150,
    marginRight: 10,
};

const styleScroll: TStyle = {
    overflow: 'scroll',
};


type TColorSetGroup = Readonly<{
    name: string;
    colors: TColorSet;
}>;

type TColorSetGroupList = ReadonlyArray<TColorSetGroup>;

export const ColorSets: TStoryComponent<TStoryAux> = ({ ...aux }) => {
    const themeName = aux['[theme]'];
    const theme: TTheme = getTheme(themeName);
    
    const colorSetItems = React.useMemo<TColorSetGroupList>(
        () => {
            return Object.entries(theme.colorSets).map(([key, value]) => ({
                name: key,
                colors: value,
            }));
        },
        [theme],
    );
    
    return (
        <Themed theme={aux['[theme]']}>
            <Abs top={0} left={0} right={0} bottom={0} colors="primary" align="stretch">
                <Flex style={styleScroll}>
                    {colorSetItems.map((item, i) => (
                        <React.Fragment key={item.name}>
                            <ListItem size="lg" justify="flex-start" padding="0 15" style={backStyle}>
                                <Txt
                                    shadow="sm"
                                    font="semi"
                                    size="lg"
                                    colors="primary"
                                    style={width150Style}
                                >
                                    {item.name}
                                </Txt>
                                <Flex
                                    flex={1}
                                    colors={item.colors}
                                    shape="sm"
                                    border="lg"
                                    align="center"
                                    margin="0 10 0 0"
                                >
                                    <Txt colors={item.colors}>Normal</Txt>
                                </Flex>
                                <Flex
                                    flex={1}
                                    colors={item.colors}
                                    shape="sm"
                                    border="lg"
                                    align="center"
                                    state="hover"
                                    margin="0 10 0 0"
                                >
                                    <Txt colors={item.colors}>Hover</Txt>
                                </Flex>
                                <Flex
                                    flex={1}
                                    colors={item.colors}
                                    shape="sm"
                                    border="lg"
                                    state="active"
                                    align="center"
                                >
                                    <Txt colors={item.colors}>Active</Txt>
                                </Flex>
                            </ListItem>
                            {i < colorSetItems.length - 1 && (
                                <Divider size="md" colors="tertiary" />
                            )}
                        </React.Fragment>
                    ))}
                </Flex>
            </Abs>
        </Themed>
    );
};

ColorSets.args = themeArgs;

ColorSets.argTypes = themeArgTypes;
