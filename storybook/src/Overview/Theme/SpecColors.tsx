import React from 'react';

import {
    Flex, Txt, Abs, TStringList, TStyle,
} from '../../../../src';
import { Color } from './Color';
import { themeArgs, themeArgTypes } from '../../constants';
import Themed from '../../Themed';
import { TStoryAux, TStoryComponent } from '../../types';
import { getTheme } from '../../utils/get-theme';


const specGroups = [
    'lightblue',
    'darkblue',
    'blue',
    'orange',
    'green',
    'gold',
    'red',
    'lime',
    'grey',
    'royal',
    'overlay',
    'header',
    'black',
    'white',
];


type TColorGroup = Readonly<{
    name: string;
    keys: TStringList;
}>;

type TColorGroupList = ReadonlyArray<TColorGroup>;

const styleScroll: TStyle = {
    overflow: 'scroll',
};


export const SpecColors: TStoryComponent<TStoryAux> = ({ ...aux }) => {
    const themeName = aux['[theme]'];
    const theme = getTheme(themeName);
    
    const specGrouped = React.useMemo<TColorGroupList>(
        () => {
            const specKeys = Object.keys(theme.colors.spec);
            
            return specGroups.map((name) => ({
                name,
                keys: specKeys.filter((key) => key.startsWith(name)),
            }));
        },
        [theme],
    );
    
    return (
        <Themed theme={themeName}>
            <Abs top={0} left={0} right={0} bottom={0} colors="primary">
                <Flex style={styleScroll}>
                    <Flex padding="20" direction="row" align="center">
                        {specGrouped.map(({ name, keys }) => (
                            <Flex key={name} margin="0 5">
                                <Txt font="semi" margin="10 0">{name}</Txt>
                                {keys.map((key) => (
                                    <Color
                                        key={key}
                                        label={key.slice(name.length)}
                                        name={`spec.${key}`}
                                        value={theme.colors.spec[key] || ''}
                                    />
                                ))}
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Abs>
        </Themed>
    );
};

SpecColors.args = themeArgs;

SpecColors.argTypes = themeArgTypes;
