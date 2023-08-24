export const removeItem = <T>(
    array: ReadonlyArray<T>,
    index: number,
): ReadonlyArray<T> => {
    if (index < 0 || index >= array.length) {
        return array;
    }
    
    return [...array.slice(0, index), ...array.slice(index + 1)];
};

