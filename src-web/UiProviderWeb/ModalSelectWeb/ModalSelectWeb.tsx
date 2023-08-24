import React from 'react';
import {
    Button, emptyFunction, ListProgressive, TButtonEmbed, TButtonEmbedNamed,
    TButtonEmbedNamedList, TButtonGroupOnPress, TColorSet, TPartial, TPropsModalSelect,
} from '../../../src';
import { getButtonsSelectStyled } from '../../utils/get-buttons-select-styled';
import { removeEmptyFields } from '../../utils/remove-empty-fields';
import { ModalTarget } from '../../ModalTarget';


const MIN_HEIGHT: number = 250;
const MAX_HEIGHT: number = 360;

export const colorsOverlay: TColorSet = {
    bg: 'spec.overlay30',
    bgActive: 'spec.overlay30',
    bgHover: 'spec.overlay30',
    border: 'spec.overlay30',
    borderActive: 'spec.overlay30',
    borderHover: 'spec.overlay30',
    text: 'transparent',
    textActive: 'transparent',
    textHover: 'transparent',
};

type TCustom = TPartial<{
    minHeight: number;
    maxHeight: number;
    fixedWidth: number;
}>;

const ModalSelectWeb_: React.ForwardRefRenderFunction<unknown, TPropsModalSelect> = (
    {
        font = null,
        isHidden = null,
        colors = null,
        onPress = null,
        onClose = null,
        testId = null,
        active = null,
        buttons = null,
        colorsActive = null,
        fontActive = null,
        targetRef = null,
        countBatch = null,
        countInitial = null,
        custom = null,
        size = null,
        sizeText = null,
        icons = null,
        lines = null,
        style = null,
        flex = null,
        flexText = null,
        justify = null,
        align = null,
        shape = null,
        border = null,
        shadow = null,
        shadowText = null,
        alignText = null,
    },
    ref,
): React.ReactElement => {
    const customLocal = custom as TCustom;
    const minHeight = typeof customLocal?.minHeight === 'number' ? customLocal.minHeight : MIN_HEIGHT;
    const maxHeight = typeof customLocal?.maxHeight === 'number' ? customLocal.maxHeight : MAX_HEIGHT;
    const fixedWidth = typeof customLocal?.fixedWidth === 'number' ? customLocal.fixedWidth : null;
    
    const propsButton = React.useMemo<TButtonEmbed>(
        () => removeEmptyFields({
            size,
            sizeText,
            icons,
            lines,
            style,
            flex,
            flexText,
            justify,
            align,
            shape,
            border,
            shadow,
            shadowText,
            alignText,
        }),
        [
            align, alignText, border, flex, flexText, icons, justify, lines,
            shadow, shadowText, shape, size, sizeText, style,
        ],
    );
    
    const buttonsStyled = React.useMemo<TButtonEmbedNamedList>(
        () => getButtonsSelectStyled(buttons),
        [buttons],
    );
    
    const press: TButtonGroupOnPress = React.useCallback(
        (e, name) => {
            if (typeof name === 'string' && onPress) {
                onPress(e, name);
            }
            if (onClose) {
                onClose();
            }
        },
        [onPress, onClose],
    );
    
    const colorsFinal = colors || 'primary';
    const colorsActiveFinal = colorsActive || 'accentghost';
    const fontFinal = font || 'regular';
    const fontActiveFinal = fontActive || 'semi';
    
    const renderItem: (
        item: TButtonEmbedNamed,
        index: number,
    ) => React.ReactElement = React.useCallback(
        (item) => {
            return (
                <Button
                    {...propsButton}
                    {...item}
                    colors={item.name !== active ? (item.colors || colorsFinal) : colorsActiveFinal}
                    font={item.name !== active ? (item.font || fontFinal) : fontActiveFinal}
                    key={item.name}
                    onPress={item.isDisabled ? null : press}
                />
            );
        },
        [active, colorsActiveFinal, colorsFinal, fontActiveFinal, fontFinal, press, propsButton],
    );
    
    return (
        <ModalTarget
            targetElement={targetRef?.current as HTMLElement}
            minHeight={minHeight}
            maxHeight={maxHeight}
            fixedWidth={fixedWidth}
            isHidden={isHidden}
            onClose={onClose || emptyFunction}
            testId={testId}
            ref={ref as React.Ref<HTMLDivElement> | undefined}
        >
            <ListProgressive
                items={buttonsStyled}
                onRenderItem={renderItem}
                countBatch={countBatch}
                countInitial={countInitial}
            />
        </ModalTarget>
    );
};

export const ModalSelectWeb = React.memo(React.forwardRef(ModalSelectWeb_));
