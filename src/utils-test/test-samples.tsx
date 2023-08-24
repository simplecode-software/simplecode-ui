import React from 'react';

import {
    TButtonEmbedNamed, TFlexEmbed, TIconEmbed, TModalSelectEmbed, TButtonEmbed,
    TColorSet, TShapeName, TBorderName, TColorsProp, TSpecSize, TShadowName,
    TShadowTextName, TActivityState, TStyle, TActiveButtons, TButtonGroupBehavior,
    TButtonEmbedNamedList, TButtonGroupEmbed, TPropsIcon, TPropVariants, TPropsSwitch,
    TPropsButton, TPropsButtonGroup, TPropsFlex, TPropsDivider, TPropsListItem,
    TPropsLoadingView,
    TCbVoid,
    TPropsAbs,
    TPropsIconComponent,
    TPropsInput,
    TPropsInputZone,
    TPropsTxt,
    TPropsTextFragment,
    TBaseEmbed,
    TPropsToast,
} from '../types';
import { emptyFunction } from '../constants';
import { LoadingIcon } from '../LoadingIcon';
import { IconEmpty } from '../IconEmpty';
import { TPropsList } from '../List';


export const sampleIcon1: TIconEmbed = {
    Component: IconEmpty,
    name: 'checkbox',
};

export const sampleIcon2: TIconEmbed = {
    Component: IconEmpty,
    name: 'add',
};

export const sampleButton1: TButtonEmbedNamed = {
    name: 'btn-1',
    label: 'Button 1',
};

export const sampleButton2: TButtonEmbedNamed = {
    name: 'btn-2',
    label: 'Button 2',
};

export const sampleSelect0: TModalSelectEmbed = {
    buttons: [],
};

export const sampleSelect1: TModalSelectEmbed = {
    buttons: [sampleButton1],
};

export const sampleSelect2: TModalSelectEmbed = {
    buttons: [sampleButton1, sampleButton2],
};

export const sampleColors1: TColorSet = {
    text: 'text.primary',
    textHover: 'text.primaryplus',
    textActive: 'text.primaryminus',
    bg: 'bg.primaryalt',
    bgHover: 'bg.primaryaltplus',
    bgActive: 'bg.primaryaltminus',
    border: 'transparent',
    borderHover: 'transparent',
    borderActive: 'transparent',
};

export const sampleColors2: TColorSet = {
    text: 'text.success',
    textHover: 'text.successplus',
    textActive: 'text.successminus',
    bg: 'transparent',
    bgHover: 'transparent',
    bgActive: 'transparent',
    border: 'bg.success',
    borderHover: 'bg.successplus',
    borderActive: 'bg.successminus',
};


export const variantsFlex: ReadonlyArray<number | null> = [
    null, -1, 0, 1, 2,
];


export const variantsCssSides: ReadonlyArray<string | number | null> = [
    null, 0, 10, '5 15', '5 15 3', '1 2 3 4', '-1 -2 -3 -4',
];

export const variantsShape: ReadonlyArray<TShapeName | null> = [
    null, 'none',
    'rounded', 'rounded.all', 'rounded.top', 'rounded.bottom', 'rounded.left', 'rounded.right',
    'xlg', 'xlg.all', 'xlg.top', 'xlg.bottom', 'xlg.left', 'xlg.right',
    'lg', 'lg.all', 'lg.top', 'lg.bottom', 'lg.left', 'lg.right',
    'md', 'md.all', 'md.top', 'md.bottom', 'md.left', 'md.right',
    'sm', 'sm.all', 'sm.top', 'sm.bottom', 'sm.left', 'sm.right',
];

export const variantsBorder: ReadonlyArray<TBorderName | null> = [
    null, 'none',
    'xlg', 'xlg.all', 'xlg.top', 'xlg.bottom', 'xlg.left', 'xlg.right',
    'lg', 'lg.all', 'lg.top', 'lg.bottom', 'lg.left', 'lg.right',
    'md', 'md.all', 'md.top', 'md.bottom', 'md.left', 'md.right',
    'sm', 'sm.all', 'sm.top', 'sm.bottom', 'sm.left', 'sm.right',
];

export const variantsHref: ReadonlyArray<string | null> = [
    null, '', 'https://google.com',
];

export const variantsColors: ReadonlyArray<TColorsProp | null> = [
    null, 'secondary', 'accenttext', sampleColors1, sampleColors2,
];

export const variantsColor: ReadonlyArray<string | null> = [
    null, '#ff0000', '#00ff00', '#0000ff',
];

export const variantsString: ReadonlyArray<string | null> = [
    null, 'test-id', 'button-name', 'Label', '',
];

export const variantsCapitalize: ReadonlyArray<TPropsInput['autoCapitalize']> = [
    null, 'none', 'sentences', 'words', 'characters',
];

export const variantsTextStrict: ReadonlyArray<string> = [
    'plain text',
    'Text @Mention',
    'text <a>anchor</a>',
    'text <a href="https://google.com">google</a>',
    '<a href="https://google.com">google1</a> <a href="https://google.com">google2</a>',
    'anchor <a href="https://google.com">@Mention</a>',
    'url https://google.com',
    'urls https://google.com and https://google.com',
    'url https://@Mention.com',
    'mentions @broken e@mai.l',
    'mention @Somebody @Else',
    'mention @Somebody Long',
    'mention @Somebody Long Extra',
];

export const variantsText: ReadonlyArray<string | null> = [
    null, ...variantsTextStrict,
];

export const variantsChildren: ReadonlyArray<React.ReactNode | null> = [
    null, ['custom node'],
];

export const variantsBoolean: ReadonlyArray<boolean | null> = [
    null, true, false,
];

export const variantsCallback: ReadonlyArray<TCbVoid | null> = [
    null, emptyFunction,
];

export const variantsOpacity: ReadonlyArray<number | null> = [
    null, 0, 0.5, 1,
];

export const variantsState: ReadonlyArray<TActivityState> = [
    null, 'active', 'hover',
];

export const variantsFlexStyle: ReadonlyArray<TStyle> = [
    null, { width: 100 }, { position: 'absolute' },
];

export const variantsTextStyle: ReadonlyArray<TStyle> = [
    null, { letterSpacing: 1 }, { lineHeight: 20 },
];

export const variantsLines: ReadonlyArray<number | null> = [
    null, -1, 0, 1, 2,
];

export const variantsSizeIcon: ReadonlyArray<number | null> = [
    null, 20, 30,
];

export const variantsRotation: ReadonlyArray<number | null> = [
    null, 45, 90,
];

export const variantsOffset: ReadonlyArray<number | null> = [
    null, 50, 100,
];

export const variantsDimension: ReadonlyArray<string | number | null> = [
    null, '45%', 90,
];

export const variantsIconComponent: ReadonlyArray<TPropsIcon['Component']> = [
    null, LoadingIcon,
];

export const variantsSize: ReadonlyArray<TSpecSize | null> = [
    null, 'auto',
    'xxsm', 'xsm', 'sm', 'md', 'lg', 'xlg', 'xxlg',
];

export const variantsFont: ReadonlyArray<string | null> = [
    null, 'regular', 'semi', 'bold', 'mono',
];

export const variantsShadow: ReadonlyArray<TShadowName | null> = [
    null, 'none', 'sm', 'md', 'lg',
];

export const variantsShadowText: ReadonlyArray<TShadowTextName | null> = [
    null, 'none', 'sm', 'md',
];

export const variantsDirection: ReadonlyArray<TFlexEmbed['direction'] | null> = [
    null, 'row', 'row-reverse', 'column', 'column-reverse',
];

export const variantsJustify: ReadonlyArray<TFlexEmbed['justify']> = [
    null, 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly',
];
export const variantsAlign: ReadonlyArray<TFlexEmbed['align']> = [
    null, 'flex-start', 'flex-end', 'center', 'stretch', 'baseline',
];

export const variantsEvents: ReadonlyArray<TFlexEmbed['events']> = [
    null, 'box-none', 'none', 'box-only', 'auto',
];

export const variantsAlignText: ReadonlyArray<TButtonEmbed['alignText']> = [
    null, 'auto', 'left', 'right', 'center', 'justify',
];

export const variantsIcons: ReadonlyArray<TButtonEmbed['icons']> = [
    null, [sampleIcon1], [sampleIcon1, sampleIcon2], [null, sampleIcon2],
];

export const variantsSelect: ReadonlyArray<TButtonEmbed['select']> = [
    null, sampleSelect0, sampleSelect1, sampleSelect2,
];

export const variantsActive: ReadonlyArray<TActiveButtons | null> = [
    null, [], 'button-name', ['button-name'],
];

export const variantsBehavior: ReadonlyArray<TButtonGroupBehavior | null> = [
    null, 'radio', 'button', 'checkbox',
];

export const variantsButtons: ReadonlyArray<TButtonEmbedNamedList | null> = [
    null, [], [sampleButton1], [sampleButton1, sampleButton2],
];

export const variantsButtonGroup: ReadonlyArray<TButtonGroupEmbed | null> = variantsButtons.map(
    (buttons) => (buttons ? { buttons } : null),
);

export const variantsSpacing: ReadonlyArray<number | null> = [
    null, 10, 20,
];

export const variantsDuration: ReadonlyArray<number | null> = [
    null, 5000, 10000,
];

export const variantsCountInitial: ReadonlyArray<number | null> = [
    null, 0, 1, 2,
];

export const variantsCountBatch: ReadonlyArray<number | null> = [
    null, 1, 2,
];

export const variantsInterval: ReadonlyArray<number | null> = [
    null, 25, 50,
];

export const sampleBaseEmbed: TPropVariants<TBaseEmbed> = {
    flex: variantsFlex,
    padding: variantsCssSides,
    margin: variantsCssSides,
    shape: variantsShape,
    border: variantsBorder,
    href: variantsHref,
    colors: variantsColors,
    testId: variantsString,
    isDisabled: variantsBoolean,
    opacityDisabled: variantsOpacity,
    isHidden: variantsBoolean,
    state: variantsState,
    style: variantsFlexStyle,
};

export const samplePropsFlex: TPropVariants<TPropsFlex> = {
    ...sampleBaseEmbed,
    shadow: variantsShadow,
    direction: variantsDirection,
    justify: variantsJustify,
    align: variantsAlign,
    events: variantsEvents,
    children: variantsChildren,
    onPress: variantsCallback,
    onPressIn: variantsCallback,
    onPressOut: variantsCallback,
    onState: variantsCallback,
};

export const samplePropsToast: TPropVariants<TPropsToast> = {
    name: variantsString,
    text: variantsString,
    label: variantsString,
    lineColors: variantsColors,
    duration: variantsDuration,
    onAction: variantsCallback,
    onClose: variantsCallback,
};

export const samplePropsAbs: TPropVariants<TPropsAbs> = {
    ...samplePropsFlex,
    left: variantsOffset,
    right: variantsOffset,
    top: variantsOffset,
    bottom: variantsOffset,
    width: variantsDimension,
    height: variantsDimension,
};

export const samplePropsDivider: TPropVariants<TPropsDivider> = {
    ...samplePropsFlex,
    size: variantsSize,
};

export const samplePropsIcon: TPropVariants<TPropsIcon> = {
    ...samplePropsFlex,
    Component: variantsIconComponent,
    size: variantsSize,
    sizeIcon: variantsSizeIcon,
    rotation: variantsRotation,
    name: variantsString,
    shadowIcon: variantsShadowText,
};

export const samplePropsIconEmpty: TPropVariants<TPropsIconComponent> = {
    name: variantsString,
    size: variantsSizeIcon,
    color: variantsColor,
    style: variantsFlexStyle,
};

export const samplePropsLoadingIcon: TPropVariants<TPropsIconComponent> = samplePropsIconEmpty;

export const samplePropsTextFragment: TPropVariants<TPropsTextFragment> = {
    ...sampleBaseEmbed,
    lines: variantsLines,
    size: variantsSize,
    font: variantsFont,
    align: variantsAlignText,
    shadow: variantsShadowText,
    shadowBox: variantsShadow,
    isOpaque: variantsBoolean,
    children: variantsText,
    onPress: variantsCallback,
};

export const samplePropsTxt: TPropVariants<TPropsTxt> = {
    ...sampleBaseEmbed,
    hasMentions: variantsBoolean,
    isDecorated: variantsBoolean,
};

export const samplePropsMention: TPropVariants<TPropsTextFragment> = samplePropsTextFragment;

export const samplePropsButton: TPropVariants<TPropsButton> = {
    ...samplePropsFlex,
    lines: variantsLines,
    size: variantsSize,
    font: variantsFont,
    shadowText: variantsShadowText,
    name: variantsString,
    sizeText: variantsSize,
    alignText: variantsAlignText,
    label: variantsString,
    labelActive: variantsString,
    icons: variantsIcons,
    iconsActive: variantsIcons,
    flexText: variantsFlex,
    fontActive: variantsFont,
    isActive: variantsBoolean,
    colorsActive: variantsColors,
    select: variantsSelect,
};

export const samplePropsSwitch: TPropVariants<TPropsSwitch> = {
    ...samplePropsButton,
    colorsIcon: variantsColors,
    value: variantsBoolean,
    onChange: variantsCallback,
    onPress: variantsCallback,
};

export const samplePropsButtonGroup: TPropVariants<TPropsButtonGroup> = {
    ...samplePropsButton,
    onPress: variantsCallback,
    active: variantsActive,
    behavior: variantsBehavior,
    buttons: variantsButtons,
    spacing: variantsSpacing,
    countInitial: variantsCountInitial,
    countBatch: variantsCountBatch,
    interval: variantsInterval,
};

export const samplePropsListItem: TPropVariants<TPropsListItem> = {
    ...samplePropsButton,
    buttonGroup: variantsButtonGroup,
};

export const samplePropsList: TPropVariants<TPropsList> = {
    ...samplePropsListItem,
    onPress: variantsCallback,
    onPressButton: variantsCallback,
};

export const samplePropsLoadingView: TPropVariants<TPropsLoadingView> = {
    ...samplePropsButton,
    isLoading: variantsBoolean,
    colorsContainer: variantsColors,
};

export const samplePropsInput: TPropVariants<TPropsInput> = {
    ...samplePropsListItem,
    isBlurOnSubmit: variantsBoolean,
    isMulti: variantsBoolean,
    isAuto: variantsBoolean,
    placeholder: variantsString,
    max: variantsOffset,
    value: variantsString,
    colorsPlaceholder: variantsColors,
    keyboardType: variantsString,
    secureTextEntry: variantsBoolean,
    autoCapitalize: variantsCapitalize,
    autoCorrect: variantsBoolean,
    initialLines: variantsLines,
    isReadonly: variantsBoolean,
    returnKeyType: variantsString,
    children: variantsChildren,
    onChange: variantsCallback,
    onMention: variantsCallback,
    onPress: variantsCallback,
    onPressButton: variantsCallback,
    onBlur: variantsCallback,
    onFocus: variantsCallback,
    onSubmit: variantsCallback,
};

export const samplePropsInputZone: TPropVariants<TPropsInputZone> = {
    ...samplePropsInput,
    placeholderTextColor: variantsColor,
    onFocuser: variantsCallback,
};
