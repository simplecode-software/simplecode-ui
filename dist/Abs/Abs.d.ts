import React from 'react';
import { TStyle } from '../types';
export declare const Abs: React.MemoExoticComponent<React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
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
}>> & Readonly<import("../types").PartialNullable<{
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: string | number;
    height: string | number;
}>> & React.RefAttributes<unknown>>>;
