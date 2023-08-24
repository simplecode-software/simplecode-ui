import React from 'react';
export declare const Section: React.MemoExoticComponent<React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
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
    events: "auto" | "none" | "box-none" | "box-only";
}>> & Readonly<import("../types").PartialNullable<{
    name: string;
    size: import("../types").TSpecSize;
    sizeText: import("../types").TSpecSize;
    sizeIcons: import("../types").TSpecSize;
    alignText: "justify" | "auto" | "center" | "left" | "right";
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
    divider: import("../types").TDividerEmbed;
}>> & Readonly<import("../types").PartialNullable<{
    children: React.ReactNode;
    header: React.ReactNode;
    onPress: import("../types").TButtonGroupOnPress;
}>> & React.RefAttributes<unknown>>>;
