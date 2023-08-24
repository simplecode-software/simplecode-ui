import React from 'react';
export declare const Flex: React.MemoExoticComponent<React.ForwardRefExoticComponent<Readonly<import("../types").PartialNullable<{
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
    children: React.ReactNode;
    onPress: import("../types").TOnPress;
    onPressIn: import("../types").TOnPress;
    onPressOut: import("../types").TOnPress;
    onLayout: import("../types").TCb<React.BaseSyntheticEvent<object, any, any>>;
    onState: import("../types").TCb<import("../types").TActivityState>;
}>> & React.RefAttributes<unknown>>>;
