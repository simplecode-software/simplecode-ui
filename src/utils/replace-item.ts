export const replaceItem = <T>(
    array: ReadonlyArray<T>,
    item: T,
    index: number,
): ReadonlyArray<T> => {
    if (index < 0 || index >= array.length) {
        return array;
    }
    
    return [...array.slice(0, index), item, ...array.slice(index + 1)];
};
