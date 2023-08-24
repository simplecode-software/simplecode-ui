import React from 'react';

import type {
    TThemeContext, TPropsInput, TButtonOnPress, TStyle, TMentionDesc, TFocusControl, TCbString,
} from '../types';
import { ThemeContext } from '../ThemeContext';
import { ListItem } from '../ListItem';
import { Flex } from '../Flex';
import { InputZone } from '../InputZone';
import { getMentions } from '../utils/get-mentions';
import { emptyObject } from '../constants/empty';


const inputWrapper: TStyle = {
    height: '100%',
    overflow: 'hidden',
};


type TMentionDict = Readonly<Record<string, TMentionDesc>>;


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
    const [valueOwn, setValueOwn] = React.useState<string>('');
    const mentionDictRef = React.useRef<TMentionDict>(emptyObject);
    
    React.useEffect(
        () => {
            setValueOwn(value || '');
        },
        [value],
    );
    
    React.useEffect(
        () => {
            if (!hasMentions) {
                return;
            }
            const newMentions = getMentions(valueOwn || '');
            if (newMentions) {
                const newDict: TMentionDict = newMentions.reduce(
                    (accum, next) => {
                        if (!next.isMention) {
                            return accum;
                        }
                        return { ...accum, [next.text]: next };
                    },
                    emptyObject as TMentionDict,
                );
                mentionDictRef.current = newDict;
            } else {
                mentionDictRef.current = emptyObject;
            }
        },
        [hasMentions, valueOwn],
    );
    
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
    
    const updateText: TCbString = React.useCallback(
        (text) => {
            // If mentions ignored, just pass the text through
            if (!hasMentions) {
                if (onChange) {
                    onChange(text);
                }
                return;
            }
            
            // First, replace the known mentions
            let replaced = text;
            Object.values(mentionDictRef.current).forEach((mention) => {
                replaced = replaced.replaceAll(
                    mention.text,
                    `@{{${mention.id || ''}||${mention.text.slice(1)}}}`,
                );
            });
            
            // See if the new mention is being added at the end
            // NOTE: only trailing mentions are supported
            const matched = replaced.match(/(?:\s|^)@[a-z]*$/i);
            const pendingMention = matched ? (matched[0] || '') : '';
            
            if (onMention) {
                onMention(pendingMention ? pendingMention.replace(/^\s/, '') : '');
            }
            
            // Take a substring without the trailing mention (if there is any)
            const noPending = pendingMention ? replaced.slice(0, -pendingMention.length) : replaced;
            
            // Pull the mentions once again: both replaced and any highlighted
            const mentions = getMentions(noPending);
            
            // For all mentions, we either have an ID, or disband the mention
            if (mentions) {
                replaced = mentions.map((mention) => {
                    if (mention.isMention) {
                        return mention.id
                            ? `@{{${mention.id}||${mention.text.slice(1)}}}`
                            : mention.text.slice(1);
                    }
                    return mention.text;
                }).join('');
                replaced = `${replaced}${pendingMention}`;
            }
            
            setValueOwn(replaced);
            if (onChange) {
                onChange(replaced);
            }
        },
        [hasMentions, onChange, onMention],
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
                    value={valueOwn}
                    style={themeStyle}
                    size={finalSize}
                    placeholderTextColor={placeholderTextColor}
                    onChange={updateText}
                    onFocuser={setFocuser}
                    custom={custom}
                    testId={testId && `InputZone:${testId}`}
                />
            </Flex>
            {children}
        </ListItem>
    );
};


export const Input = React.memo(React.forwardRef(Input_));
