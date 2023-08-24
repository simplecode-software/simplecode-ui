import React from 'react';
export declare const ModalContext: React.Context<Readonly<{
    showModal: (name: string, node: React.ReactNode) => void;
    hideModal: import("../types").TCbString;
    showToast: import("../types").TCb<Readonly<import("../types").PartialNullable<{
        text: string;
        label: string;
        lineColors: import("../types").TColorsProp;
        duration: number;
        onAction: import("../types").TCbVoid;
    }>>>;
}>>;
