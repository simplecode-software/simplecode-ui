import React from 'react';
import type { TStyle, TIconEmbedList } from '../types';
export declare const Switch: React.MemoExoticComponent<React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
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
    style: TStyle;
}>> & Readonly<import("../types").PartialNullable<{
    direction: "column" | "column-reverse" | "row" | "row-reverse";
    justify: "space-around" | "space-between" | "space-evenly" | "center" | "flex-end" | "flex-start";
    align: "stretch" | "center" | "flex-end" | "flex-start" | "baseline";
    shadow: import("../types").TShadowName;
    events: "auto" | "none" | "box-none" | "box-only";
}>> & Readonly<import("../types").PartialNullable<{
    name: string;
    size: import("../types").TSpecSize;
    sizeText: import("../types").TSpecSize;
    sizeIcons: import("../types").TSpecSize;
    alignText: "auto" | "justify" | "center" | "left" | "right";
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
    colorsActive: import("../types").TColorsProp;
    select: import("../types").TGenButtonGroupEmbed<import("../types").TButtonEmbed>;
}>> & Readonly<import("../types").PartialNullable<{
    colorsIcon: import("../types").TColorsProp;
    value: boolean;
}>> & Readonly<import("../types").PartialNullable<{
    onChange: import("../types").TCbBool;
    onPress: import("../types").TButtonOnPress;
}>> & React.RefAttributes<unknown>>>;
