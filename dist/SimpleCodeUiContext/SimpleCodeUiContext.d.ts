import React from 'react';
import { TIconEmbed, TSimpleCodeUiContext } from '../types';
export declare const defaultSimpleCodeUiContext: TSimpleCodeUiContext;
export declare const SimpleCodeUiContext: React.Context<Readonly<{
    Flex: React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
        Component: import("../types").TAnyComponent;
        flex: number;
        padding: string | number;
        margin: string | number;
        shape: import("../types").TShapeName;
        border: import("../types").TBorderName;
        href: string;
        colors: import("../types").TColorsProp;
        testId: string;
        isDisabled: boolean;
        opacityDisabled: number;
        isHidden: boolean;
        state: import("../types").TActivityState;
        custom: Readonly<{
            [key: string]: unknown;
        }>;
        style: import("../types").TStyle;
    }>> & Readonly<import("../types").PartialNullable<{
        direction: "row" | "column" | "row-reverse" | "column-reverse";
        justify: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
        align: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
        shadow: import("../types").TShadowName;
        events: "none" | "box-none" | "box-only" | "auto";
    }>> & Readonly<import("../types").PartialNullable<{
        children: React.ReactNode;
        onPress: import("../types").TOnPress;
        onPressIn: import("../types").TOnPress;
        onPressOut: import("../types").TOnPress;
        onLayout: import("../types").TCb<React.BaseSyntheticEvent<object, any, any>>;
        onState: import("../types").TCb<import("../types").TActivityState>;
    }>> & React.RefAttributes<unknown>>;
    TextFragment: React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
        Component: import("../types").TAnyComponent;
        flex: number;
        padding: string | number;
        margin: string | number;
        shape: import("../types").TShapeName;
        border: import("../types").TBorderName;
        href: string;
        colors: import("../types").TColorsProp;
        testId: string;
        isDisabled: boolean;
        opacityDisabled: number;
        isHidden: boolean;
        state: import("../types").TActivityState;
        custom: Readonly<{
            [key: string]: unknown;
        }>;
        style: import("../types").TStyle;
    }>> & Readonly<import("../types").PartialNullable<{
        lines: number;
        size: import("../types").TSpecSize;
        font: string;
        align: "justify" | "left" | "right" | "center" | "auto";
        shadow: import("../types").TShadowTextName;
        shadowBox: import("../types").TShadowName;
        isOpaque: boolean;
    }>> & Readonly<{
        children?: React.ReactNode;
        onPress?: import("../types").TOnPress | null | undefined;
    }> & React.RefAttributes<unknown>>;
    ModalSelect: React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
        Component: import("../types").TAnyComponent;
        flex: number;
        padding: string | number;
        margin: string | number;
        shape: import("../types").TShapeName;
        border: import("../types").TBorderName;
        href: string;
        colors: import("../types").TColorsProp;
        testId: string;
        isDisabled: boolean;
        opacityDisabled: number;
        isHidden: boolean;
        state: import("../types").TActivityState;
        custom: Readonly<{
            [key: string]: unknown;
        }>;
        style: import("../types").TStyle;
    }>> & Readonly<import("../types").PartialNullable<{
        direction: "row" | "column" | "row-reverse" | "column-reverse";
        justify: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
        align: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
        shadow: import("../types").TShadowName;
        events: "none" | "box-none" | "box-only" | "auto";
    }>> & Readonly<import("../types").PartialNullable<{
        name: string;
        size: import("../types").TSpecSize;
        sizeText: import("../types").TSpecSize;
        sizeIcons: import("../types").TSpecSize;
        alignText: "justify" | "left" | "right" | "center" | "auto";
        hasMentions: boolean;
        isDecorated: boolean;
        label: string;
        labelActive: string;
        icons: import("../types").TIconEmbedList;
        iconsActive: import("../types").TIconEmbedList;
        shadowText: import("../types").TShadowTextName;
        flexText: number;
        lines: number;
        font: string;
        fontActive: string;
        isActive: boolean;
        colorsActive: import("../types").TColorsProp;
        select: import("../types").TGenButtonGroupEmbed<import("../types").TButtonEmbed>;
    }>> & Readonly<import("../types").PartialNullable<{
        active: import("../types").TActiveButtons;
        behavior: import("../types").TButtonGroupBehavior;
        buttons: readonly ((Readonly<import("../types").PartialNullable<{
            Component: import("../types").TAnyComponent;
            flex: number;
            padding: string | number;
            margin: string | number;
            shape: import("../types").TShapeName;
            border: import("../types").TBorderName;
            href: string;
            colors: import("../types").TColorsProp;
            testId: string;
            isDisabled: boolean;
            opacityDisabled: number;
            isHidden: boolean;
            state: import("../types").TActivityState;
            custom: Readonly<{
                [key: string]: unknown;
            }>;
            style: import("../types").TStyle;
        }>> & Readonly<import("../types").PartialNullable<{
            direction: "row" | "column" | "row-reverse" | "column-reverse";
            justify: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
            align: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
            shadow: import("../types").TShadowName;
            events: "none" | "box-none" | "box-only" | "auto";
        }>> & Readonly<import("../types").PartialNullable<{
            name: string;
            size: import("../types").TSpecSize;
            sizeText: import("../types").TSpecSize;
            sizeIcons: import("../types").TSpecSize;
            alignText: "justify" | "left" | "right" | "center" | "auto";
            hasMentions: boolean;
            isDecorated: boolean;
            label: string;
            labelActive: string;
            icons: import("../types").TIconEmbedList;
            iconsActive: import("../types").TIconEmbedList;
            shadowText: import("../types").TShadowTextName;
            flexText: number;
            lines: number;
            font: string;
            fontActive: string;
            isActive: boolean;
            colorsActive: import("../types").TColorsProp;
            select: import("../types").TGenButtonGroupEmbed<import("../types").TButtonEmbed>;
        }>> & Readonly<{
            name: string;
        }>) | null)[];
        spacing: number;
        countInitial: number;
        countBatch: number;
        interval: number;
    }>> & Readonly<import("../types").PartialNullable<{
        overlayStyle: import("../types").TStyle;
        backgroundStyle: import("../types").TStyle;
        isNonBlocking: boolean;
    }>> & Readonly<{
        onClose: import("../types").TCbVoid;
        onPress: import("../types").TButtonGroupOnPress;
        targetRef?: React.RefObject<unknown> | null | undefined;
    }> & React.RefAttributes<unknown>>;
    Toast: React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
        name: string;
        text: string;
        label: string;
        lineColors: import("../types").TColorsProp;
        duration: number;
        onAction: import("../types").TCbVoid;
        onClose: import("../types").TCbString;
    }>> & React.RefAttributes<unknown>>;
    InputZone: React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
        Component: import("../types").TAnyComponent;
        flex: number;
        padding: string | number;
        margin: string | number;
        shape: import("../types").TShapeName;
        border: import("../types").TBorderName;
        href: string;
        colors: import("../types").TColorsProp;
        testId: string;
        isDisabled: boolean;
        opacityDisabled: number;
        isHidden: boolean;
        state: import("../types").TActivityState;
        custom: Readonly<{
            [key: string]: unknown;
        }>;
        style: import("../types").TStyle;
    }>> & Readonly<import("../types").PartialNullable<{
        direction: "row" | "column" | "row-reverse" | "column-reverse";
        justify: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
        align: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
        shadow: import("../types").TShadowName;
        events: "none" | "box-none" | "box-only" | "auto";
    }>> & Readonly<import("../types").PartialNullable<{
        name: string;
        size: import("../types").TSpecSize;
        sizeText: import("../types").TSpecSize;
        sizeIcons: import("../types").TSpecSize;
        alignText: "justify" | "left" | "right" | "center" | "auto";
        hasMentions: boolean;
        isDecorated: boolean;
        label: string;
        labelActive: string;
        icons: import("../types").TIconEmbedList;
        iconsActive: import("../types").TIconEmbedList;
        shadowText: import("../types").TShadowTextName;
        flexText: number;
        lines: number;
        font: string;
        fontActive: string;
        isActive: boolean;
        colorsActive: import("../types").TColorsProp;
        select: import("../types").TGenButtonGroupEmbed<import("../types").TButtonEmbed>;
    }>> & Readonly<import("../types").PartialNullable<{
        buttonGroup: import("../types").TButtonGroupEmbed;
    }>> & Readonly<import("../types").PartialNullable<{
        isBlurOnSubmit: boolean;
        isMulti: boolean;
        isAuto: boolean;
        placeholder: string;
        max: number;
        value: string;
        colorsPlaceholder: import("../types").TColorsProp;
        keyboardType: string;
        secureTextEntry: boolean;
        autoCapitalize: "none" | "sentences" | "words" | "characters";
        autoCorrect: boolean;
        initialLines: number;
        isReadonly: boolean;
        returnKeyType: string;
    }>> & Readonly<import("../types").PartialNullable<{
        children: React.ReactNode;
        onChange: import("../types").TCbString;
        onMention: import("../types").TCbString;
        onPress: import("../types").TButtonOnPress;
        onPressButton: import("../types").TButtonGroupOnPress;
        onBlur: import("../types").TCbVoid;
        onFocus: import("../types").TCbVoid;
        onSubmit: import("../types").TOnPress;
    }>> & Readonly<import("../types").PartialNullable<{
        placeholderTextColor: string;
        onFocuser: import("../types").TCb<Readonly<{
            focus: import("../types").TCbVoid;
        }> | null>;
    }>> & React.RefAttributes<unknown>>;
    LoadingIcon: React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
        name: string;
        size: number;
        color: string;
        style: import("../types").TStyle;
    }>> & React.RefAttributes<unknown>>;
    Modal: React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
        children: React.ReactNode;
        overlay: React.ReactNode;
        isHidden: boolean;
        isFloating: boolean;
        isTransparent: boolean;
        overlayStyle: import("../types").TStyle;
        backgroundStyle: import("../types").TStyle;
        onDismiss: import("../types").TCbVoid;
        testId: string;
        isNonBlocking: boolean;
    }>> & React.RefAttributes<unknown>>;
    transformText: import("../types").TTransformText;
    icons: Readonly<{
        caretDown: TIconEmbed;
        radioOn: TIconEmbed;
        radioOff: TIconEmbed;
        checkboxOn: TIconEmbed;
        checkboxOff: TIconEmbed;
        switchHandle: TIconEmbed;
    }>;
}>>;
