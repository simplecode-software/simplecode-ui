import { TUnknownObject } from '../types';

const asString = (value: unknown): string => {
    if (typeof value === 'string') {
        return `"${value}"`;
    }
    if (typeof value === 'number') {
        return `${value}`;
    }
    if (typeof value === 'boolean') {
        return `${value ? 'true' : 'false'}`;
    }
    if (typeof value === 'function') {
        return '[f]';
    }
    if (value instanceof Error) {
        return `"${value.message || value.constructor.name}"`;
    }
    return JSON.stringify(value);
};


const getHash = (input: string): string => {
    let hash: number = 0;
    for (let i = 0; i < input.length; i++) {
        // eslint-disable-next-line no-bitwise
        hash = input.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash.toString(16);
};

export const getPropsHash = <T extends TUnknownObject>(props: T): string => {
    const propStrings = Object.entries(props).map(([key, value]) => {
        if (value === null || value === undefined) {
            return '';
        }
        return `${key}={${asString(value)}}`;
    });
    const plainText = propStrings.filter((x) => x).join(',');
    
    return plainText ? getHash(plainText).replace(/^-/, '0') : '[EMPTY]';
};
