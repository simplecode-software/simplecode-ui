import React from 'react';

import type {
    TThemeContext, TPropsInput, TButtonOnPress, TStyle, TFocusControl,
} from '../types';
import { ThemeContext } from '../ThemeContext';
import { ListItem } from '../ListItem';
import { Flex } from '../Flex';
import { InputZone } from '../InputZone';


const inputWrapper: TStyle = {
    height: '100%',
    overflow: 'hidden',
};

const Input_: React.ForwardRefRenderFunction<unknown, TPropsInput> = (
    {
        alignText = null,
        flexText = null,
        font = null,
        shadowText = null,
        state = null,
        hasMentions = null,
        isBlurOnSubmit = null,
        isMulti = null,
        isAuto = null,
        placeholder = null,
        onChange = null,
        onMention = null,
        max = null,
        value = null,
        colorsPlaceholder = null,
        keyboardType = null,
        secureTextEntry = null,
        onBlur = null,
        onFocus = null,
        children = null,
        autoCapitalize = null,
        autoCorrect = null,
        initialLines = null,
        isReadonly = null,
        onPress = null,
        onSubmit = null,
        returnKeyType = null,
        direction = null,
        sizeText = null,
        custom = null,
        ...propsListItem
    }: TPropsInput,
    ref,
) => {
    const {
        size = null,
        colors = null,
        isDisabled = null,
        testId = null,
    } = propsListItem;
    const [focuser, setFocuser] = React.useState<TFocusControl | null>(null);
    
    const pressItem: TButtonOnPress = React.useCallback(
        (event, name) => {
            if (!isReadonly && focuser) {
                focuser.focus();
            }
            if (onPress) {
                onPress(event, name);
            }
        },
        [isReadonly, onPress, focuser],
    );
    
    const finalSize = size || 'md';
    const finalSizeText = sizeText || 'md';
    
    const themeContext: TThemeContext = React.useContext(ThemeContext);
    
    const placeholderTextColor = themeContext.getColorText(state, colorsPlaceholder || 'greytext');
    
    const minHeight = React.useMemo<number>(
        () => {
            const lineHeight = themeContext.getSize(finalSizeText, 'line');
            let minHeight = (lineHeight || 0);
            if (initialLines && initialLines > 1) {
                minHeight *= initialLines;
            }
            return minHeight;
        },
        [finalSizeText, initialLines, themeContext],
    );
    
    const wrapperStyle = React.useMemo<TStyle>(
        () => {
            return [
                inputWrapper,
                { minHeight },
            ];
        },
        [minHeight],
    );
    
    const themeStyle = React.useMemo<TStyle>(
        () => {
            return [
                ({
                    ...themeContext.getFont(font || 'regular'),
                    fontSize: themeContext.getSize(finalSizeText, 'font'),
                    minHeight,
                    color: themeContext.getColorText(state, colors || 'primary'),
                    opacity: isReadonly ? 0.75 : 1,
                } as TStyle),
                themeContext.getShadowText(shadowText),
            ];
        },
        [themeContext, font, finalSizeText, minHeight, state, colors, isReadonly, shadowText],
    );
    
    return (
        <ListItem
            ref={ref}
            {...propsListItem}
            onPress={pressItem}
            direction={direction || 'row'}
        >
            <Flex
                flex={direction === 'column' ? 0 : 1}
                colors="none"
                style={wrapperStyle}
            >
                <InputZone
                    sizeText={sizeText}
                    alignText={alignText}
                    flexText={flexText}
                    font={font}
                    shadowText={shadowText}
                    colors={colors}
                    isDisabled={isDisabled}
                    hasMentions={hasMentions}
                    isBlurOnSubmit={isBlurOnSubmit}
                    isMulti={isMulti}
                    isAuto={isAuto}
                    placeholder={placeholder}
                    max={max}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={autoCorrect}
                    isReadonly={isReadonly}
                    onSubmit={onSubmit}
                    returnKeyType={returnKeyType}
                    value={value}
                    style={themeStyle}
                    size={finalSize}
                    placeholderTextColor={placeholderTextColor}
                    onChange={onChange}
                    onFocuser={setFocuser}
                    onMention={onMention}
                    custom={custom}
                    testId={testId && `InputZone:${testId}`}
                />
            </Flex>
            {children}
        </ListItem>
    );
};


export const Input = React.memo(React.forwardRef(Input_));
