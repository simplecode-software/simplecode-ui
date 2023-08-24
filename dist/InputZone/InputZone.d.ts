import React from 'react';
export declare const InputZone: React.MemoExoticComponent<React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
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
    justify: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    align: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
    shadow: import("../types").TShadowName;
    events: "none" | "box-none" | "box-only" | "auto";
}>> & Readonly<import("../types").PartialNullable<{
    name: string;
    size: import("../types").TSpecSize;
    sizeText: import("../types").TSpecSize;
    sizeIcons: import("../types").TSpecSize;
    alignText: "justify" | "center" | "left" | "right" | "auto";
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
}>> & React.RefAttributes<unknown>>>;
