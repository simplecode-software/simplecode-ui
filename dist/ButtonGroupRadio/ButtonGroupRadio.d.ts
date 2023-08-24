import React from 'react';
import type { TIconEmbedList, TPropsButton } from '../types';
export declare const ButtonGroupRadio: React.MemoExoticComponent<React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
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
    alignText: "justify" | "center" | "left" | "right" | "auto";
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
        alignText: "justify" | "center" | "left" | "right" | "auto";
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
    }>> & Readonly<{
        name: string;
    }>) | null)[];
    spacing: number;
    countInitial: number;
    countBatch: number;
    interval: number;
}>> & Readonly<import("../types").PartialNullable<{
    onPress: import("../types").TButtonGroupOnPress;
    onRenderItem: import("../types").TRenderItemFn<TPropsButton>;
}>> & React.RefAttributes<unknown>>>;
