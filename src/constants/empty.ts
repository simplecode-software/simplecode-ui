import { TCbVoid } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const emptyArray: ReadonlyArray<any> = [];

export const emptyObject: Readonly<Record<never, never>> = {};

export const emptyString: string = '';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const emptyFunction: TCbVoid = () => {};

Object.freeze(emptyArray);
Object.freeze(emptyObject);
