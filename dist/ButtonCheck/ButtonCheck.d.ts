import React from 'react';
import { TColorsProp, TIconEmbedList, TSpecSize } from '../types';
export declare const ButtonCheck: React.MemoExoticComponent<React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
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
    justify: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    align: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
    shadow: import("../types").TShadowName;
    events: "auto" | "none" | "box-none" | "box-only";
}>> & Readonly<import("../types").PartialNullable<{
    name: string;
    size: TSpecSize;
    sizeText: TSpecSize;
    sizeIcons: TSpecSize;
    alignText: "auto" | "justify" | "left" | "right" | "center";
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
    colorsIcon: TColorsProp;
    value: boolean;
}>> & Readonly<import("../types").PartialNullable<{
    onChange: import("../types").TCbBool;
    onPress: import("../types").TButtonOnPress;
}>> & React.RefAttributes<unknown>>>;
