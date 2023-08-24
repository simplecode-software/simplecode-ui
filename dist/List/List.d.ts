import React from 'react';
import type { TListItemEmbed, TListItemEmbedList, TRenderItemFn } from '../types';
export declare const List: React.MemoExoticComponent<React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
    items: readonly (TListItemEmbed | null)[];
    onRenderItem: TRenderItemFn<TListItemEmbed>;
    countInitial: number;
    countBatch: number;
    interval: number;
}>> & Readonly<import("../types").PartialNullable<{
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
    events: "auto" | "none" | "box-none" | "box-only";
}>> & Readonly<import("../types").PartialNullable<{
    name: string;
    size: import("../types").TSpecSize;
    sizeText: import("../types").TSpecSize;
    sizeIcons: import("../types").TSpecSize;
    alignText: "justify" | "auto" | "left" | "right" | "center";
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
    active: import("../types").TActiveButtons;
    behavior: import("../types").TButtonGroupBehavior;
    items: TListItemEmbedList;
    divider: import("../types").TDividerEmbed;
}>> & Readonly<import("../types").PartialNullable<{
    onPress: import("../types").TButtonGroupOnPress;
    onPressButton: import("../types").TButtonGroupOnPress;
}>> & React.RefAttributes<unknown>>>;
