import { replaceItem } from './replace-item';


export const updateItem = <T extends Readonly<Record<string, unknown>>>(
    array: ReadonlyArray<T>,
    fields: Readonly<Partial<T>>,
    index: number,
): ReadonlyArray<T> => {
    const item: T | null = index < 0 ? null : (array[index] ?? null);
    if (!item) {
        return array;
    }
    
    return replaceItem(array, { ...item, ...fields }, index);
};

