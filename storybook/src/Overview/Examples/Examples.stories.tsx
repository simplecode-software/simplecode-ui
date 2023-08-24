import React from 'react';
import {
    Flex,
} from '../../../../src';

import { themeArgs, themeArgTypes } from '../../constants';
import { TStoryAux, TStoryComponent } from '../../types';
import { buttonRow, colorSetNames, sizeNames } from './constants/variants-button';
import { VariantButton } from './VariantButton';
import { RowTitle } from '../RowTitle';
import { Page } from './Page';
import { VariantTxt } from './VariantTxt';
import { fontNames, txtRow } from './constants/variants-txt';
import { VariantCheckbox } from './VariantCheckbox';
import { checkboxColorSetNames, checkboxRow } from './constants/variants-checkbox';


export default {
    title: 'Design System/Overview/Examples',
    component: 'div',
};


export const Txt: TStoryComponent<TStoryAux> = ({ ...aux }) => {
    const themeName = aux['[theme]'];
    
    return (
        <Page theme={themeName} title="Txt variants. Press to copy JSX.">
            {txtRow.map((txt) => (
                <Flex
                    key={`${txt.size || 'md'}`}
                    direction="row"
                    justify="space-evenly"
                    align="center"
                >
                    <RowTitle text={`${txt.size || 'md'}:`} />
                    {fontNames.map((fontName) => (
                        txt && (
                            <VariantTxt
                                key={fontName}
                                txt={txt}
                                fontName={fontName}
                            />
                        )
                    ))}
                </Flex>
            ))}
        </Page>
    );
};

Txt.args = themeArgs;
Txt.argTypes = themeArgTypes;


export const Button: TStoryComponent<TStoryAux> = ({ ...aux }) => {
    const themeName = aux['[theme]'];
    
    return (
        <Page theme={themeName} title="Button variants. Press to copy JSX.">
            {colorSetNames.map((colorSetName) => (
                sizeNames.map((sizeName) => (
                    <Flex
                        key={`${colorSetName}-${sizeName}`}
                        direction="row"
                        justify="space-evenly"
                        align="center"
                    >
                        <RowTitle text={`${colorSetName}${sizeName ? ` ${sizeName}` : ''}:`} />
                        {buttonRow.map((button) => (
                            button && (
                                <VariantButton
                                    key={button.name}
                                    button={button}
                                    sizeName={sizeName}
                                    colorSetName={colorSetName}
                                />
                            )
                        ))}
                    </Flex>
                ))
            ))}
        </Page>
    );
};

Button.args = themeArgs;
Button.argTypes = themeArgTypes;


export const Checkbox: TStoryComponent<TStoryAux> = ({ ...aux }) => {
    const themeName = aux['[theme]'];
    
    return (
        <Page theme={themeName} title="Checkbox variants. Press to copy JSX.">
            {checkboxRow.map((button) => (
                <Flex
                    key={button.size}
                    direction="row"
                    justify="space-evenly"
                    align="center"
                >
                    <RowTitle text={`${button.size}:`} />
                    {checkboxColorSetNames.map((colorSetName) => (
                        button && (
                            <VariantCheckbox
                                key={colorSetName}
                                button={button}
                                colorSetName={colorSetName}
                            />
                        )
                    ))}
                </Flex>
            ))}
        </Page>
    );
};

Checkbox.args = themeArgs;
Checkbox.argTypes = themeArgTypes;
