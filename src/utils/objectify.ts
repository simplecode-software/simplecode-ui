import createCachedSelector from 're-reselect';

import { TUnknownObject } from '../types';


type TObjectifyFn<T> = (key: keyof T, value: T[keyof T]) => T;

export const createTypedObjectify = <T>(): TObjectifyFn<T> => {
    return createCachedSelector<keyof T, T[keyof T], keyof T, T[keyof T], T>(
        (key) => key,
        (_key, value) => value,
        (key, value) => ({ [key]: value } as unknown as T),
    )((key, value) => `objectify-${key as string}-${value}`) as TObjectifyFn<T>;
};

export const objectify = createTypedObjectify<TUnknownObject>();
