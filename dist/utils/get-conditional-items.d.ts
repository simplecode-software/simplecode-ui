export declare const getConditionalItems: <T extends Readonly<{
    [key: string]: unknown;
}>>(isAvailable: boolean, item: T) => readonly T[];
