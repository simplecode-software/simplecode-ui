import React from 'react';
import { TIconEmbedList, TSelectVariant, TColorsProp } from '../types';
export declare const Select: React.MemoExoticComponent<React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
    Component: import("../types").TAnyComponent;
    flex: number;
    padding: string | number;
    margin: string | number;
    shape: import("../types").TShapeName;
    border: import("../types").TBorderName;
    href: string;
    colors: TColorsProp;
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
    events: "none" | "auto" | "box-none" | "box-only";
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
    icons: TIconEmbedList;
    iconsActive: TIconEmbedList;
    shadowText: import("../types").TShadowTextName;
    flexText: number;
    lines: number;
    font: string;
    fontActive: string;
    isActive: boolean;
    colorsActive: TColorsProp;
    select: import("../types").TGenButtonGroupEmbed<import("../types").TButtonEmbed>;
}>> & Readonly<import("../types").PartialNullable<{
    children: React.ReactNode;
    onPress: import("../types").TButtonOnPress;
}>> & Readonly<import("../types").PartialNullable<{
    placeholder: string;
    active: string | number;
    options: import("../types").TButtonEmbedNamedList;
    onChange: import("../types").TSelectOnChange;
    variant: TSelectVariant;
    overlayStyle: import("../types").TStyle;
    backgroundStyle: import("../types").TStyle;
    isNonBlocking: boolean;
}>> & React.RefAttributes<unknown>>>;
