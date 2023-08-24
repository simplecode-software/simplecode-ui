type TObjectifyFn<T> = (key: keyof T, value: T[keyof T]) => T;
export declare const createTypedObjectify: <T>() => TObjectifyFn<T>;
export declare const objectify: TObjectifyFn<Readonly<{
    [key: string]: unknown;
}>>;
export {};
