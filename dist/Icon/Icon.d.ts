import React from 'react';
import { TStyle, TAnyComponent } from '../types';
export declare const Icon: React.MemoExoticComponent<React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
    Component: TAnyComponent;
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
    direction: "row" | "column" | "row-reverse" | "column-reverse";
    justify: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    align: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    shadow: import("../types").TShadowName;
    events: "auto" | "none" | "box-none" | "box-only";
}>> & Readonly<import("../types").PartialNullable<{
    size: import("../types").TSpecSize;
    sizeIcon: number;
    rotation: number;
    name: string;
    shadowIcon: import("../types").TShadowTextName;
}>> & Readonly<import("../types").PartialNullable<{
    onPress: import("../types").TButtonOnPress;
}>> & React.RefAttributes<unknown>>>;
