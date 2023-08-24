import React from 'react';
import {
    Flex, Txt, TThemeColorSlot, Abs, TStringList, TStyle,
} from '../../../../src';

import { Color } from './Color';
import { themeArgs, themeArgTypes } from '../../constants';
import Themed from '../../Themed';
import { TStoryAux, TStoryComponent } from '../../types';
import { getTheme } from '../../utils/get-theme';


type TColorGroup = Readonly<{
    name: string;
    keys: TStringList;
}>;

type TColorGroupList = ReadonlyArray<TColorGroup>;


const slotGroups = [
    'primary',
    'primaryalt',
    'secondary',
    'tertiary',
    'accent',
    'success',
    'warning',
    'error',
    'contrast',
];

const styleScroll: TStyle = {
    overflow: 'scroll',
};


export const ColorSlots: TStoryComponent<TStoryAux> = ({ ...aux }) => {
    const themeName = aux['[theme]'];
    const theme = getTheme(themeName);
    
    const bgGrouped = React.useMemo<TColorGroupList>(
        () => {
            const bgKeys = Object.keys(theme.colors.bg);
            return slotGroups.map((name) => ({
                name,
                keys: bgKeys.filter(
                    (key) => (key === name || key === `${name}plus` || key === `${name}minus`),
                ),
            }));
        },
        [theme],
    );
    
    const textGrouped = React.useMemo<TColorGroupList>(
        () => {
            const textKeys = Object.keys(theme.colors.text);
            return slotGroups.map((name) => ({
                name,
                keys: textKeys.filter(
                    (key) => (key === name || key === `${name}plus` || key === `${name}minus`),
                ),
            }));
        },
        [theme],
    );
    
    return (
        <Themed theme={themeName}>
            <Abs top={0} left={0} right={0} bottom={0} colors="primary">
                <Flex style={styleScroll}>
                    <Flex>
                        <Txt font="semi" size="xlg" margin="30 0 0 5">Background</Txt>
                        <Flex justify="center" direction="row">
                            {bgGrouped.map(({ name, keys }) => (
                                <Flex key={name} margin="0 5">
                                    <Txt font="semi" margin="5 0">{name}</Txt>
                                    {keys.map((key) => {
                                        const backgroundColor = theme.colors.bg[key as TThemeColorSlot];
                                        return (
                                            <Color
                                                key={key}
                                                label={key.slice(name.length)}
                                                name={`bg.${key}`}
                                                value={backgroundColor}
                                            />
                                        );
                                    })}
                                </Flex>
                            ))}
                        </Flex>
                        <Txt font="semi" size="xlg" margin="30 0 0 5">Text</Txt>
                        <Flex justify="center" direction="row">
                            {textGrouped.map(({ name, keys }) => (
                                <Flex key={name} margin="0 5">
                                    <Txt font="semi" margin="5 0">{name}</Txt>
                                    {keys.map((key) => {
                                        const backgroundColor = theme.colors.text[key as TThemeColorSlot];
                                        return (
                                            <Color
                                                key={key}
                                                label={key.slice(name.length)}
                                                name={`text.${key}`}
                                                value={backgroundColor}
                                            />
                                        );
                                    })}
                                </Flex>
                            ))}
                        </Flex>
                    </Flex>
                </Flex>
            </Abs>
        </Themed>
    );
};

ColorSlots.args = themeArgs;

ColorSlots.argTypes = themeArgTypes;
